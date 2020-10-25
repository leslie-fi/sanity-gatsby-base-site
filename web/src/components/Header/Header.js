import {Link, graphql, useStaticQuery} from 'gatsby'
import React, {useEffect, useState} from 'react'
// import Image from 'gatsby-image'
import Navigation from './Navigation'

import Logo from '../../assets/svgs/logo.svg'

import {cn} from '../../lib/helpers'

import styles from './header.module.css'

const Header = ({location, onHideNav, onShowNav, showNav, mainImage}) => {
  const [mobileStatus, setMobileStatus] = useState(false)
  // console.log({mainImage})
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setMobileStatus(mobileStatus === false)
        // console.log('Close')
      }
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [mobileStatus])

  const toggleMobileNav = e => {
    e.preventDefault()
    // console.log('click')
    setMobileStatus(mobileStatus === false)
  }

  const data = useStaticQuery(graphql`
  {
      mainNav:  sanityNavigation(_id: { eq: "mainNav" }) {
        links {
          _key
          title
          siteLink
          links {
            _key
            title
            siteLink
          }
        }
      }
  }
  `)
  // console.log(data.topMiniNav)
  return (
    <>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <div className={styles.innerWrapper}>
            <nav className={styles.topMiniNav}>
              <Navigation nav={data.topMiniNav} />
            </nav>
            <div className={styles.branding}>
              <Link to='/' aria-label='Logo'>
                <span className={styles.logoWrapper}><Logo /></span>
              </Link>
            </div>
            <button className={mobileStatus ? styles.menuToggleOn : styles.menuToggle} onClick={toggleMobileNav} aria-label='Click this to toggle the main navigation'><span /></button>

            <nav className={cn(styles.nav, !mobileStatus ? styles.hideNav : styles.showNav)} role='navigation' aria-label='Main menu'>
              <Navigation nav={data.mainNav} main top={data.topMiniNav} />
            </nav>

          </div>
        </div>
      </div>

    </>
  )
}

export default Header
