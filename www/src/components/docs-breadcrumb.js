import React from "react"
import getActiveItem from "../utils/sidebar/get-active-item"
import getActiveItemParents from "../utils/sidebar/get-active-item-parents"

const Breadcrumb = ({ itemList, location }) => {
  const activeItem = getActiveItem(itemList.items, location, undefined)
  console.log({ activeItem })
  const activeItemParents = getActiveItemParents(itemList.items, activeItem, [])
  console.log({ activeItemParents })

  return (
    <div>
      {activeItemParents.reverse().map(link => (
        <>
          <span>{link.title}</span>
          <span>></span>
        </>
      ))}
      {activeItem.title}
    </div>
  )
}

export default Breadcrumb
