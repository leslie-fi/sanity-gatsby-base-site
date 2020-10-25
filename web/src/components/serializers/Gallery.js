import React from 'react'
import Lightbox from '../Lightbox/gallery'

// import styles from './gallery.module.css'

function Gallery (props) {
  // console.log({props})
  return (
    <Lightbox images={props.images} />
  )
}
export default Gallery
