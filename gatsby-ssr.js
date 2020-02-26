import React from 'react'

// replace inline css/scss with links
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  if (process.env.NODE_ENV !== 'production') {
    return
  }
  const headComponents = getHeadComponents()

  // workaround to revert forcefully injected inline styles
  // described in https://github.com/gatsbyjs/gatsby/issues/1526
  // takes data-href from <style> tag with inline styles which contains URL to global css file
  // and transforms it into stylesheet link component
  const transformedHeadComponents = headComponents.map(node => {
    if (node.type === 'style') {
      const globalStyleHref = node.props['data-href']
      if (globalStyleHref) {
        return <link href={globalStyleHref} rel="stylesheet" type="text/css" />
      } else {
        return node
      }
    } else {
      return node
    }
  })
  replaceHeadComponents(transformedHeadComponents)
}
