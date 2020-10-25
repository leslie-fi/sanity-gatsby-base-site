import React from 'react'
import SectionHeading from './SectionHeading'
import PortableText from './Text'
import CallOut from './CallOut'
import ImageComponent from './ImageComponent'
import Youtube from '../Youtube'
import Vimeo from '../Vimeo'
import ContentViews from './contentViews'

export default ({content}) => {
  // console.log({content})

  const ContentManager = ({content}) => {
    if (content._type === 'textBlock') {
      return <PortableText blocks={content.body} key={content._key} />
    }
    if (content._type === 'sectionHeading') {
      return <SectionHeading content={content} key={content._key} />
    }
    if (content._type === 'callOut') {
      return <CallOut content={content} key={content._key} />
    }
    if (content._type === 'imageComponent') {
      return <ImageComponent content={content} key={content._key} />
    }
    if (content._type === 'youtube') {
      return <Youtube {...content} key={content._key} />
    }
    if (content._type === 'vimeo') {
      return <Vimeo {...content} key={content._key} />
    }
    if (content._type === 'contentViews') {
      return <ContentViews {...content} key={content._key} />
    }
  }

  return (
    <>
      {content.map(content => (
        <ContentManager key={content._key} content={content} />
      ))}
    </>
  )
}
