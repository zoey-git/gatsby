---
title: Static vs Page Queries
---

## Static Queries

Static Queries allow users to source data using a GraphQL query in any component. It was introduced to Gatsby as of Gatsby V2.

Here is an example usecase of a Static Query:

```jsx:title=src/components/header.js
import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header>
        <h1>{data.site.siteMetadata.title}</h1>
      </header>
    )}
  />
)
```

As we see here, we can use StaticQuery to query data anywhere in our project, not just in page components.

### Limitations of Static Queries

- Cannot use variables in StaticQueries. The following example is invalid in Gatsby:

```jsx
  <StaticQuery query={graphql`
    query($id: String!) {
      data(filter: { id: { eq: $id }}) {
        # data
      }
    }
  `} render={/* render data */} />
```

- StaticQueries can only be used in JSX. It will not work with raw `React.createElement` calls.
- Only can have one StaticQuery per JS file.

## Page Queries

A Page Query on the other hand is a way to source data in Gatsby pages. This includes any component found in `src/pages/` or templates created with the [createPage](/docs/actions/#createPage) API.

Here is a similar query to the example in the previous section, but done with a PageQuery.

```jsx:title=src/pages/index.js
const Homepage = ({ data }) => {
  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  )
}

export default Homepage

export const query = graphql`
  query HeadingQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
```

The data that is returned from the GraphQL query is instead attached as a prop onto the page.

Unlike a StaticQuery, you can pass in variables from the page context and use them inside a query. So if we ran a `createPage` call that looked like this:

```js
actions.createPage({
  path: `/foo`,
  component: TestComponent,
  context: {
    id: `123456`,
  },
})
```

Then the id can be used in the query like such:

```js
export const query = graphql`
  query($id: String!) {
    # grab data with the particular id that we pass in.
  }
`
```

### Limitations of Page Queries

- It cannot be used in any React component outside of a template or a page in `src/pages/`.
- Similar with a `StaticQuery`, there can only be one PageQuery per page.
