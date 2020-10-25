import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import PortableText from '../serializers/portableText'
import Navigation from '../Header/Navigation'
import styles from './footer.module.css'

export default function Footer () {
  const data = useStaticQuery(graphql`
  {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title

    }
    footerNav: sanityNavigation(_id: { eq: "footerNav" }) {
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
  // console.log({data})
  // console.log(data.footerNav)

  return (
    <>
      <footer className={styles.footer} >
        <div className={styles.footerWrapper}>

          <div className={styles.footerTopWrapper}>

            <div className={styles.footerTopSecond}>
              {/* Footer Navigation */}
              {/* <h3>Quick Links</h3> */}
              <Navigation nav={data.footerNav} />
            </div>

          </div>

        </div>
      </footer>
      <footer className={styles.footerBottom} >
        <div className={styles.footerWrapper}>
          <div className={styles.footerBottomWrapper}>
            <span> &copy; {new Date().getFullYear()} {data.site.title} All Rights Reserved. Site by: <a href='https://www.variantstudios.com' target='_blank' rel='noopener noreferrer'>Variant Studios</a>.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
