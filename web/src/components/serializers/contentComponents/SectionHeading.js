import React from 'react'
import clientConfig from '../../../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from '../serializers'
import styles from './sectionheading.module.css'

export default ({content: {title, subTitle, subText, layoutStyle}}) => {
  // console.log({cta})
  return (
    <div className={` ${styles.sectionheading__wrapper} ${layoutStyle} ${layoutStyle === 'leftAligned' && styles.layout__left} ${layoutStyle === 'centerAligned' && styles.layout__center}`}>
      {title && (<h3 className={styles.sectionheading__title}>{title}</h3>)}
      {subTitle && (<h4 className={styles.sectionheading__subtitle}>{subTitle}</h4>)}
      {subText && (<div className='portableText'>
        <BasePortableText blocks={subText} serializers={serializers} {...clientConfig.sanity} />
      </div>)}
    </div>
  )
}
