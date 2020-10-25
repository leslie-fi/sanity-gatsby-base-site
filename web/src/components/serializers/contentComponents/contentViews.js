import React from 'react'
import BlogView from '../viewComponents/BlogView'
import WfContact from '../viewComponents/WfContact'
import GoogleSearch from '../viewComponents/GoogleSearch'

import styles from './contentviews.module.css'

export default ({contentView}) => {
  // console.log({contentView})
  return (
    <div className={` ${styles.contentviews__wrapper}`}>
      {contentView === 'blogPostView' && (<BlogView />)}
      {contentView === 'wfContact' && (<WfContact />)}
      {contentView === 'googleSearch' && (<GoogleSearch />)}
    </div>
  )
}
