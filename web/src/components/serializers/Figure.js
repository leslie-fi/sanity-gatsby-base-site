import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'

import './figure.module.css'

export default ({node}) => {
  if (!node.asset) {
    return null
  }
  const fluidProps = getFluidGatsbyImage(node.asset._ref, {maxWidth: 980}, clientConfig.sanity)

  return (
    <>
      <figure style={{maxWidth: '980px', margin: '2rem auto'}}>
        <Img loading='eager' fluid={fluidProps} alt={node.alt} />
        {/* <figcaption>{node.alt}</figcaption> */}
      </figure>
    </>
  )
}
