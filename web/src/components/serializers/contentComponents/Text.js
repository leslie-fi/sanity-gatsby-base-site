import React from 'react'
import clientConfig from '../../../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from '../serializers'

const Text = ({blocks}) => (

  <div className='portableText'>
    <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
  </div>
)

export default Text
