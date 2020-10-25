import React from 'react'

import WaypointIcon from '../images/icons/waypoint.svg'
import EmailIcon from '../images/icons/email.svg'
import FacebookIcon from '../images/icons/facebook.svg'
import MenuIcon from '../images/icons/order.svg'
import InstagramIcon from '../images/icons/instagram.svg'
import TwitterIcon from '../images/icons/twitter.svg'
import BusinessIcon from '../images/icons/link.svg'
import LinkedinIcon from '../images/icons/linkedin.svg'
import CallIcon from '../images/icons/call.svg'

function Icons ({type}) {
  // console.log({type})
  return (
    <>
      {type === 'business' && (<BusinessIcon />)}
      {type === 'menu' && (<MenuIcon />)}
      {type === 'facebook' && (<FacebookIcon />)}
      {type === 'twitter' && (<TwitterIcon />)}
      {type === 'instagram' && (<InstagramIcon />)}
      {type === 'linkedin' && (<LinkedinIcon />)}
      {type === 'map' && (<WaypointIcon />)}
      {type === 'email' && (<EmailIcon />)}
      {type === 'call' && (<CallIcon />)}
    </>
  )
}
export default Icons
