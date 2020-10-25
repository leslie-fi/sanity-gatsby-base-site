import React from 'react'

import Layout from './FlexibleLayout'

export default (props) => {
  // console.log({props})

  const colContent = (content) => {
    if (content && content.columnContent && content.columnContent.length > 0) {
      return content
    }
  }

  return (
    <>
      {props.blocks.map(block =>
        <Layout type={block.contentType} key={block._key}
          header={colContent(block.columnHeaderContent)}
          oneColumn={colContent(block.columnOneContent)}
          twoColumn={colContent(block.columnTwoContent)}
          threeColumn={colContent(block.columnThreeContent)}
          fourColumn={colContent(block.columnFourContent)}
          footer={colContent(block.columnFooterContent)}
          layoutOptions={block.flexibleContentLayoutOptions || null} />
      )}
    </>
  )
}
