import React from 'react'
import {Link} from 'gatsby'
import styles from './cta.module.css'

export default ({cta, buttonOnTheButton}) => {
  // console.log({cta})
  return (
    <div className={` ${styles.cta__wrapper} ${buttonOnTheButton === true && styles.buttonOnTheButton}`}>
      {cta.link && cta.linkText && (
        <>
          {cta.blank && cta.blank === true ? (
            <>
              {cta.link.includes('https') || cta.link.includes('http') ? (
                <a href={cta.link} target='_blank' rel='noopener noreferrer'>{cta.linkText}</a>
              ) : (
                <Link to={cta.link} >{cta.linkText}</Link>
              )}
            </>

          ) : (
            <>
              {cta.link.includes('https') || cta.link.includes('http') ? (
                <a href={cta.link} rel='noopener noreferrer'>{cta.linkText}</a>
              ) : (
                <Link to={`${cta.link}`}>{cta.linkText}</Link>
              )}
            </>
          )}

        </>
      )}
    </div>
  )
}
