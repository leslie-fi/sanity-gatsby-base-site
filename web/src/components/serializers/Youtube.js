import React from 'react'
import getVideoId from 'get-video-id'
import {LiteYouTubeEmbed} from 'react-lite-youtube-embed'

function Youtube (props) {
  const id = getVideoId(props.url)
  if (!id) {
    return <div>Missing YouTube URL</div>
  }
  return (
    <LiteYouTubeEmbed
      id={id}
      adNetwork={false}
      noCookie
    />
  )
}
export default Youtube
