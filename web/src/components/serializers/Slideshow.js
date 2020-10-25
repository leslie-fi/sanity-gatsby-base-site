import React from 'react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'

import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './slideshow.module.css'

function Slideshow (props) {
  // console.log({props})

  const fluidProps = (slide) => getFluidGatsbyImage(slide.slideImage.asset._ref, {maxWidth: 900}, clientConfig.sanity)
  return (
    <div style={{maxWidth: '900px', margin: '0 auto'}}>
      <Carousel showStatus dynamicHeight swipeable showThumbs={false}>
        {props.slides.map(slide => (
          <div key={slide._key}>
            {slide.link ? (
              <>
                {slide.link.includes('https') || slide.link.includes('http') ? (
                  <a href={slide.link} target='_blank' rel='noopener noreferrer'>
                    {slide.slideImage && slide.slideImage.asset && slide.slideImage.asset._ref && (
                      <Img loading='eager' key={props._key} fluid={fluidProps(slide)} alt={slide.title} />
                    )}
                  </a>
                ) : (
                  <Link to={slide.link}>
                    {slide.slideImage && slide.slideImage.asset && slide.slideImage.asset._ref && (
                      <Img loading='eager' key={props._key} fluid={fluidProps(slide)} alt={slide.title} />
                    )}
                  </Link>
                )}
              </>
            ) : (
              <>
                {slide.slideImage && slide.slideImage.asset && slide.slideImage.asset._ref && (
                  <Img loading='eager' key={props._key} fluid={fluidProps(slide)} alt={slide.title} />
                )}
              </>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  )
}
export default Slideshow
