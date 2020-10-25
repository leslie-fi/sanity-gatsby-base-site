import React from 'react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import Lightbox from '../../Lightbox/single'
import clientConfig from '../../../../client-config'

import styles from './image.module.css'

export default ({content: {lightbox, link, blank, mainImage, layoutStyle, imageWidth}}) => {
  // console.log({imageWidth})

  const maxWidth = () => {
    let width = 1440
    if (imageWidth === 'image5XL') {
      width = 700
    }
    if (imageWidth === 'image4XL') {
      width = 566
    }
    if (imageWidth === 'image3XL') {
      width = 454
    }
    if (imageWidth === 'image2XL') {
      width = 330
    }
    if (imageWidth === 'imageXL') {
      width = 256
    }
    if (imageWidth === 'imageLG') {
      width = 206
    }
    if (imageWidth === 'imageMD') {
      width = 170
    }
    if (imageWidth === 'imageSM') {
      width = 145
    }
    if (imageWidth === 'imageXS') {
      width = 125
    }
    return width
  }
  const fluidProps = mainImage && mainImage.asset ? getFluidGatsbyImage(mainImage.asset._ref, {maxWidth: maxWidth()}, clientConfig.sanity) : null

  const ImageComp = () => {
    return (
      mainImage && mainImage.asset && (<div className={styles.imageComponent__image}><Img style={{maxWidth: `${maxWidth(imageWidth)}px`}} loading='eager' fluid={fluidProps} alt={mainImage.alt} /></div>)
    )
  }

  return (
    <>
      {mainImage && fluidProps && (

        <div className={`${imageWidth && imageWidth}`}>

          {lightbox ? (
            <Lightbox image={fluidProps} />
          ) : (
            <>
              {link ? (
                <>
                  {blank && blank === true ? (
                    <>
                      {link.includes('https') || link.includes('http') ? (
                        <a href={link} target='_blank' rel='noopener noreferrer'><ImageComp /></a>
                      ) : (
                        <Link to={link}><ImageComp /></Link>
                      )}
                    </>

                  ) : (
                    <>
                      {link.includes('https') || link.includes('http') ? (
                        <a href={link} rel='noopener noreferrer'><ImageComp /></a>
                      ) : (
                        <Link to={`/${link}`}><ImageComp /></Link>
                      )}
                    </>
                  )}

                </>
              ) : (
                <ImageComp />
              )}
            </>
          )}

        </div>
      )}
    </>
  )
}
