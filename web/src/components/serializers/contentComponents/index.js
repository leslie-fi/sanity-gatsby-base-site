import React from 'react'

import Layout from './Layout'

export default (props) => {
  // console.log({props})
  return (
    <>
      {props.blocks.map(block =>
        <Layout type={block.contentType} key={block._key} header={block.columnHeaderContent} oneColumn={block.columnOneContent} twoColumn={block.columnTwoContent} threeColumn={block.columnThreeContent} fourColumn={block.columnFourContent} footer={block.columnFooterContent} layoutOptions={block.layoutOptions ? block.layoutOptions : null} />
      )}
    </>
  )
}
