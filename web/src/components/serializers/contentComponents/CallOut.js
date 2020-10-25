import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from '../serializers'
import CTA from './CTA'

import styles from './callout.module.css'

export default ({content: {title, description, cta, mainImage, layoutStyle, subText, buttonOnTheButton, contentOptions}}) => {
  const fluidProps = mainImage && mainImage.asset ? getFluidGatsbyImage(mainImage.asset._ref, {maxWidth: 150}, clientConfig.sanity) : null
  // console.log({contentOptions})
  // verticalAlignmentCenter
  // verticalAlignmentBottom

  // horizontalAlignmentCenter

  const contentOptionsClasses = () => {
    let options = 'layout__contentOptions '
    if (contentOptions && contentOptions.verticalAlignment && contentOptions.verticalAlignment === 'verticalAlignmentCenter') {
      options += 'verticalAlignmentCenter'
    }
    if (contentOptions && contentOptions.verticalAlignment && contentOptions.verticalAlignment === 'verticalAlignmentBottom') {
      options += 'verticalAlignmentBottom'
    }
    if (contentOptions && contentOptions.horizontalAlignment && contentOptions.horizontalAlignment === 'horizontalAlignmentCenter') {
      options += 'horizontalAlignmentCenter'
    }

    return options
  }
  // console.log({contentOptions})

  return (
    <div className={` ${styles.callout__wrapper} ${layoutStyle === 'stack' ? styles.layout__stack : styles.layout__column}`}>
      <div className={`${styles.callout__content} ${contentOptionsClasses()}`}>
        {title && (<h3 className={styles.callout__title}>{title}</h3>)}
        {subText && (
          <div className={styles.callout__description}>
            <BasePortableText blocks={subText} serializers={serializers} {...clientConfig.sanity} />
          </div>
        )}
        {cta && cta.linkText && cta.link && (<CTA cta={cta} buttonOnTheButton={buttonOnTheButton} />)}
      </div>
      {mainImage && mainImage.asset && (<div className={styles.callout__image}><Img loading='eager' fluid={fluidProps} alt={mainImage.alt} /></div>)}
    </div>
  )
}
