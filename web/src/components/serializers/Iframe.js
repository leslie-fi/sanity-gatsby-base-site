import React from 'react'

import './figure.module.css'

export default (props) => {
  let url = props.url
  let height = props.height
  return (
    <>
      <iframe
        src={url}
        height={height}
        width='100%'
        frameBorder='0'
      />
    </>
  )
}
