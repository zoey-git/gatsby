---
title: Whatever I want
date: "2017-07-19"
author: "Dustin Schau"
image: "../images/15009741473_9ced5e3209_o.jpg"
imageAuthor: Daniel Go
imageAuthorLink: "https://flic.kr/p/oSmRd6"
imageTitle: "Old typewriter"
canonicalLink: "https://objectpartners.com/2017/07/19/creating-a-static-blog-with-gatsby/"
publishedAt: "Object Partners, Inc."
excerpt: "In this post, we'll take a deep dive into Gatsby and some of the new 1.0 features by creating a static blog. Let's get on it!"
tags: ["getting-started", "blog", "markdown"]
---

Gatsby is an incredible static site generator that allows for React to be used
as the underlying rendering engine to scaffold out a static site that truly has
all the benefits expected in a modern web application. It does this by rendering
dynamic React components into static HTML content via [server side
rendering][react-dom-server] at build time. This means that your users get all
the benefits of a static site such as the ability to work without JavaScript,
search engine friendliness, speedy load times, etc. without losing the dynamism
and interactivity that is expected of the modern web. Once rendered to static
HTML, client-site React/JavaScript _can_ take over (if creating stateful
components or logic in `componentDidMount`) and add dynamism to the statically
generated content.

Gatsby [recently released][gatsby-release] a v1.0.0 with a bunch of new
features, including (but not limited to) the ability to create content queries
with GraphQL, integration with various CMSs--including WordPress, Contentful,
Drupal, etc., and route based code splitting to keep the end-user experience as
snappy as possible. In this post, we'll take a deep dive into Gatsby and some of
these new features by creating a static blog. Let's get on it!

## Getting started

### Installing the CLI

`npm install -g gatsby-cli`

Gatsby ships with a great CLI (command line interface) that contains the
functionality of scaffolding out a working site, as well as commands to help
develop the site once created.

`gatsby new personal-blog && cd $_`
