import React, {useState} from 'react'
import {Link} from 'gatsby'
import Arrow from '../../assets/svgs/icons/arrow.svg'

import styles from './header.module.css'

const SubLinks = (props) => {
  // console.log({props})
  return (
    <ul className={styles.sublinks} data-depth='1'>
      {props.links.map((sublinks, i) => (
        <li key={i}>

          {sublinks.siteLink.includes('https') || sublinks.siteLink.includes('http') ? (
            <a href={sublinks.siteLink} target='_blank' rel='noreferrer' title={sublinks.title}>
              {sublinks.title}
            </a>
          ) : (
            <Link to={sublinks.siteLink} title={sublinks.title}>{sublinks.title}</Link>
          )}
        </li>
      ))}
    </ul>
  )
}

function Navigation ({nav, main, top}) {
  // console.log({nav})
  const [condition, setCondition] = useState(null)
  const SiteLink = ({link, i}) => {
    // Has Sub Links
    const linkLength = link.links && link.links.length

    if (linkLength > 0) {
      // Has Link
      if (link.siteLink) {
        // External Link
        if (link.siteLink.includes('https') || link.siteLink.includes('http')) {
          return (<span>
            <a href={link.siteLink} target='_blank' rel='noopener noreferrer' title={link.title}>{link.title}</a>
            <button className={main && styles.mobileDropdown} tabIndex='0' aria-label='Toggle sub navigation' onClick={() => setCondition(condition === i ? null : i)}><Arrow /></button>
          </span>)
        } else {
          return (<span>
            <Link to={link.siteLink} title={link.title} className={main && styles.linkWithToggle}>{link.title}</Link>
            <button className={main && styles.mobileDropdown} tabIndex='0' aria-label='Toggle sub navigation' onClick={() => setCondition(condition === i ? null : i)}><Arrow /></button>
          </span>)
        }
      } else {
        // No Link
        return (<span>
          {link.title}
          <button className={main && styles.mobileDropdown} tabIndex='0' aria-label='Toggle sub navigation' onClick={() => setCondition(condition === i ? null : i)}><Arrow /></button>
        </span>)
      }
    } else {
      // No Sub Links

      // Has Link
      if (link.siteLink) {
      // External Link
        if (link.siteLink.includes('https') || link.siteLink.includes('http')) {
          return <a href={link.siteLink} target='_blank' rel='noopener noreferrer' title={link.title}>{link.title}</a>
        } else {
          return (<Link to={link.siteLink} title={link.title} className={main && styles.linkWithToggle}>{link.title}</Link>)
        }
      } else {
      // No Link
        return (<span>{link.title}</span>)
      }
    }
  }
  return (
    <>
      <ul className={main && styles.topMainNav} data-depth='0'>
        {(nav && nav.links) && nav.links.map((links, i) => (
          <li key={i} className={main && `${condition === i ? styles.toggled : ''}`}>
            <SiteLink link={links} i={i} />
            {links.links && links.links.length
              ? <SubLinks links={links.links} />
              : ''}
          </li>
        ))}
      </ul>
      <ul className={top && styles.topMainNav}>
        {(top && top.links) && top.links.map((links, i) => (
          <li key={i} className={styles.hideOnDesktop}><SiteLink link={links} i={i} /></li>
        ))}
      </ul>
    </>
  )
}

export default Navigation
