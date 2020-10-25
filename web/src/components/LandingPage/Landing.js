import React from 'react'
// import PortableText from '../serializers/portableText'
import ContentComponents from '../serializers/contentComponents/index'

// import styles from './page.module.css'

const Page = ({content}) => {
  return (
    <>
      {content && <ContentComponents blocks={content} />}
    </>
  )
}
export default Page
