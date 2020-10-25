import React from 'react'
import Helmet from 'react-helmet'
import ClientOnly from '../../../../utils/ClientOnly'

function googleSearch () {
  return (
    <ClientOnly>
      <Helmet>
        <script async src='https://cse.google.com/cse.js?cx=004958364419822009603:bp9mqd4jst4' />
      </Helmet>
      <div className='gcse-search' />
    </ClientOnly>
  )
}

export default googleSearch
