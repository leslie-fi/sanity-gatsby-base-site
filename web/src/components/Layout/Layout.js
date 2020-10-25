import React from 'react'
import {Location} from '@reach/router'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <a className={styles.skipLink} href='#main'>Skip to main</a>
    <Location children={children}>
      {({location}) => {
        return (
          <>
            <div
              className={
                location.pathname.replace(/\//g, '') === ''
                  ? `${styles.contentHome}`
                  : location.pathname.replace(/\//g, '')
              }
            >
              <Header
                location={location.pathname}
                siteTitle={siteTitle}
                onHideNav={onHideNav}
                onShowNav={onShowNav}
                showNav={showNav}
              />

              <div className={styles.root} id='main'>
                {[children]}
              </div>
            </div>

          </>
        )
      }}
    </Location>
    <Footer />
  </>
)

export default Layout
