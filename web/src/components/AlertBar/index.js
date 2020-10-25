import React, {useState, useEffect} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {useCookies} from 'react-cookie'
import PortableText from '../serializers/portableText'
// import ClientOnly from '../../utils/ClientOnly'

import styles from './alert.module.css'

export default function index () {
  const data = useStaticQuery(graphql`
  {
    alert: sanitySiteSettings {
      _rawAlert
    }
  }
`)

  const [showAlert, setShowAlert] = useState(false)

  const message = data.alert && data.alert._rawAlert && data.alert._rawAlert.alertBody
  const alertCookieName = data.alert && data.alert._rawAlert && data.alert._rawAlert.alertCookieName && data.alert._rawAlert.alertCookieName.current && data.alert._rawAlert.alertCookieName.current
  const alertCookieMaxAge = data.alert && data.alert._rawAlert && data.alert._rawAlert.alertCookieMaxAge
  const alertEnabled = data.alert && data.alert._rawAlert && data.alert._rawAlert.alertEnabled
  const alertType = data.alert && data.alert._rawAlert && data.alert._rawAlert.alertType

  const [cookies, setCookie] = useCookies([alertCookieName])
  const maxAge = alertCookieMaxAge ? alertCookieMaxAge * 24 * 60 * 60 : 5184000

  useEffect(() => {
    // doSomething(); // This is be executed when `loading` state changes
    setShowAlert(cookies[alertCookieName] !== 'false')
  }, [cookies])

  // console.log({data})

  const closeAlert = () => {
    setShowAlert(false)
    setCookie(alertCookieName, false, {path: '/', maxAge})
  }

  const warning = {
    background: '#EB0000',
    color: '#FFFFFF',
    width: '100%',
    zIndex: '3',
    bottom: '0px',
    position: 'fixed'
  }
  const notice = {
    background: '#B8D632',
    color: '#383838',
    width: '100%',
    zIndex: '3',
    bottom: '0px',
    position: 'fixed'
  }
  const alertStyle = alertType === 'alertNotice' ? notice : warning

  // console.log(cookies)
  // console.log({showAlert})
  if (alertEnabled === 'false' || showAlert === false) {
    return null
  } else {
    return (
      <div style={alertStyle} >
        <div className={styles.alertBarInnerWrapper}>
          <PortableText blocks={message} />
          <div className={styles.alertBarCloseWrapper}>
            <a onClick={closeAlert} className={styles.alertBarClose} type='button' aria-label='Close alert'>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1.695 24a1.383 1.383 0 01-1.284-.858 1.389 1.389 0 01.301-1.515L10.34 12 .712 2.372A1.389 1.389 0 112.678.407l10.61 10.61a1.389 1.389 0 010 1.965l-10.61 10.61a1.382 1.382 0 01-.983.408z' fill='#212121' /><path d='M22.305 0a1.384 1.384 0 011.284.858 1.388 1.388 0 01-.301 1.515L13.66 12l9.628 9.628a1.389 1.389 0 11-1.966 1.965l-10.61-10.61a1.389 1.389 0 010-1.965L21.323.408A1.383 1.383 0 0122.305 0z' fill='#212121' /></svg>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
