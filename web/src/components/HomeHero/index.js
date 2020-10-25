import React from 'react'
import Img from 'gatsby-image'

import styles from './homehero.module.css'

export default function index ({hero}) {
  console.log({hero})
  return (
    <div className={styles.HomeHeroWrapper}>
      <div className={styles.HomeHeroInnerWrapper}>
        {hero && hero.heroBackground && hero.heroBackground.asset && hero.heroBackground.asset.fluid(<Img loading='eager' fluid={hero.heroBackground.asset.fluid} alt='' className={styles.HeroBG} />)
        }

        {/* <Img loading='eager' fluid={hero.heroBackground.asset.fluid} alt='' className={styles.HeroBG} />

        <img loading='eager' src={hero.heroTitle.asset.url} alt='' className={styles.HeroTitle} />

        <Img loading='eager' fluid={hero.firstAnimatedGraphic.asset.fluid} alt='' className={styles.FirstAnimatedGraphic} />
        <Img loading='eager' fluid={hero.secondAnimatedGraphic.asset.fluid} alt='' className={styles.SecondAnimatedGraphic} />
        <Img loading='eager' fluid={hero.thirdAnimatedGraphic.asset.fluid} alt='' className={styles.ThirdAnimatedGraphic} /> */}
      </div>
    </div>
  )
}
