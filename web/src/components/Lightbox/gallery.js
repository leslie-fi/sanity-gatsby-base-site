import React, {useState, useEffect} from 'react'
import Img from 'gatsby-image'
import {Helmet} from 'react-helmet'
import {DialogOverlay, DialogContent} from '@reach/dialog'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'
import styles from './lightbox.module.css'

export default function Lightbox ({images}) {
  const fluidProps = (slide) => getFluidGatsbyImage(slide.asset._ref, {maxWidth: 640}, clientConfig.sanity)
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [selectedImage])

  const handleKeyPress = (e) => {
    // Left
    if (e.keyCode === 37) {
      if (selectedImage > 0) {
        goBack()
      }
    }
    // Right
    if (e.keyCode === 39) {
      if (selectedImage < images.length - 1) {
        goForward()
      }
    }
    if (e.keyCode === 27) {
      // Escape key
      close()
    }
  }

  const handleClick = (e, index) => {
    e.preventDefault()
    setShowLightbox(!showLightbox)
    setSelectedImage(index)
  }

  const goBack = () => {
    setSelectedImage(selectedImage - 1)
  }

  const goForward = () => {
    setSelectedImage(selectedImage + 1)
  }

  const close = () => setShowLightbox(false)

  return (
    <>
      <Helmet>
        <link rel='stylesheet' type='text/css' href='https://unpkg.com/@reach/dialog@0.10.0/styles.css' />
      </Helmet>
      <div className={styles.LightboxContainer}>
        {images.map((image, i) => (

          <button className={styles.PreviewButton}
            key={image._key}
            type='button'
            onClick={e => handleClick(e, i)}>
            {image.asset && image.asset._ref && (<Img loading='eager' fluid={fluidProps(image)} alt={image.alt} />)}
          </button>

        ))}
      </div>
      {showLightbox && (
        <DialogOverlay onDismiss={close} style={{background: 'hsla(0, 100%, 100%, 0.9)', zIndex: '1'}}>
          <DialogContent
            role='dialog' aria-labelledby='dialog1Title' aria-describedby='dialog1Desc'
            className={styles.LightboxContent}
          >
            <Img loading='eager' fluid={fluidProps(images[selectedImage])} />

            <div className={styles.LightboxControls}>
              <button className={styles.LightboxClose} type='button' onClick={() => {
                setShowLightbox(false)
                setSelectedImage(null)
              }} aria-label='Close lightbox'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1.695 24a1.383 1.383 0 01-1.284-.858 1.389 1.389 0 01.301-1.515L10.34 12 .712 2.372A1.389 1.389 0 112.678.407l10.61 10.61a1.389 1.389 0 010 1.965l-10.61 10.61a1.382 1.382 0 01-.983.408z' fill='#212121' /><path d='M22.305 0a1.384 1.384 0 011.284.858 1.388 1.388 0 01-.301 1.515L13.66 12l9.628 9.628a1.389 1.389 0 11-1.966 1.965l-10.61-10.61a1.389 1.389 0 010-1.965L21.323.408A1.383 1.383 0 0122.305 0z' fill='#212121' /></svg>
              </button>
              <div className={styles.LightboxLeftRight}>
                <button onClick={goBack} disabled={selectedImage === 0} className={styles.LightboxPrev} aria-label='Previous image'>
                  <svg width='14' height='24' viewBox='0 0 14 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 0a1.385 1.385 0 011.284.858 1.388 1.388 0 01-.302 1.515L3.355 12l9.627 9.628a1.389 1.389 0 11-1.965 1.965L.407 12.983a1.389 1.389 0 010-1.965L11.017.408A1.383 1.383 0 0111.999 0z' fill='#212121' /></svg>
                </button>
                <button onClick={goForward} disabled={selectedImage === images.length - 1} className={styles.LightboxNext} aria-label='Next image'>
                  <svg width='14' height='24' viewBox='0 0 14 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1.39 24a1.385 1.385 0 01-1.284-.858 1.389 1.389 0 01.301-1.515L10.035 12 .407 2.372A1.389 1.389 0 112.373.407l10.61 10.61a1.389 1.389 0 010 1.965l-10.61 10.61a1.382 1.382 0 01-.982.408z' fill='#212121' /></svg>
                </button>
              </div>
            </div>

          </DialogContent>
        </DialogOverlay>
      )}
    </>
  )
}
