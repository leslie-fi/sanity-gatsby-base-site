import React from 'react'
// import PortableText from '../serializers/portableText'
import ContentComponents from '../serializers/contentComponents/index'
import FlexibleContentComponents from '../serializers/contentComponents/FlexibleContent'

// import styles from './page.module.css'

const Page = ({content, flexibleContent}) => {
  return (
    <>
      {flexibleContent && <FlexibleContentComponents blocks={flexibleContent} />}
      {content && <ContentComponents blocks={content} />}
    </>
  )
}
export default Page
