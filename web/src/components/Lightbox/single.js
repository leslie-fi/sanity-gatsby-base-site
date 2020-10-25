import React, {useState, useEffect} from 'react'
import Img from 'gatsby-image'
import {DialogOverlay, DialogContent} from '@reach/dialog'
import '@reach/dialog/styles.css'
import styles from './lightbox.module.css'

export default function Lightbox ({image}) {
  console.log({image})
  const [showLightbox, setShowLightbox] = useState(false)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  })

  const handleKeyPress = (e) => {
    if (e.keyCode === 27) {
      // Escape key
      close()
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    setShowLightbox(!showLightbox)
  }

  const close = () => setShowLightbox(false)

  return (
    <>
      <div className={styles.LightboxSingleContainer}>
        <button className={styles.PreviewButton}
          key={image._key}
          type='button'
          onClick={e => handleClick(e)}>
          <Img fluid={image} alt={image.alt} loading='eager' />
        </button>
      </div>
      {showLightbox && (
        <DialogOverlay onDismiss={close} style={{background: 'hsla(0, 100%, 100%, 0.9)', zIndex: '1'}}>
          <DialogContent
            role='dialog' aria-labelledby='dialog1Title' aria-describedby='dialog1Desc'
            className={styles.LightboxContent}
          >
            <Img fluid={image} loading='eager' />

            <div className={styles.LightboxControls}>
              <button className={styles.LightboxClose} type='button' onClick={() => {
                setShowLightbox(false)
              }} aria-label='Close lightbox'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1.695 24a1.383 1.383 0 01-1.284-.858 1.389 1.389 0 01.301-1.515L10.34 12 .712 2.372A1.389 1.389 0 112.678.407l10.61 10.61a1.389 1.389 0 010 1.965l-10.61 10.61a1.382 1.382 0 01-.983.408z' fill='#212121' /><path d='M22.305 0a1.384 1.384 0 011.284.858 1.388 1.388 0 01-.301 1.515L13.66 12l9.628 9.628a1.389 1.389 0 11-1.966 1.965l-10.61-10.61a1.389 1.389 0 010-1.965L21.323.408A1.383 1.383 0 0122.305 0z' fill='#212121' /></svg>
              </button>
            </div>

          </DialogContent>
        </DialogOverlay>
      )}
    </>
  )
}
