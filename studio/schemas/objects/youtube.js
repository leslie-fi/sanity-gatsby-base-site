import React from 'react'

import {IoLogoYoutube as Icon} from 'react-icons/md'

import getVideoId from 'get-video-id'

const wrapperYoutube = {
  position: 'relative', paddingBottom: '56.25%'
}
const iframeYoutube = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  margin: '10px'
}
const wrapperYoutubeImage = {
  maxWidth: '100%',
  height: 'auto'
}

const YouTubePreview = ({value}) => {
  const id = getVideoId(value.url)
  const url = `https://www.youtube-nocookie.com/embed/${id}?modestbranding=1`
  if (!id) {
    return <div>Missing YouTube URL</div>
  }
  return (
    <div style={wrapperYoutube}>
      <iframe
        title='YouTube Preview'
        style={iframeYoutube}
        src={url}
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      />
    </div>
  )
}
const YouTubePreviewImage = ({value}) => {
  const id = getVideoId(value.url)
  const url = `http://i3.ytimg.com/vi/${id}/hqdefault.jpg`
  if (!id) {
    return <div>Missing YouTube URL</div>
  }
  return (
    <div >
      <img style={wrapperYoutubeImage}
        src={url}
      />
    </div>
  )
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'Youtube Embed',
  icon: Icon,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube URL'
    },
    {
      name: 'maxWidth',
      type: 'number',
      title: 'YouTube Maximum Width',
      description: 'Optional maximum YouTube width'
    }

  ],
  preview: {
    select: {
      url: 'url'
    },
    component: YouTubePreviewImage
  }
  // preview: {
  //   select: {
  //     url: 'url'
  //   },
  //   component: YouTubePreview
  // }
  // preview: {
  //   select: {
  //     title: 'mainImage.alt'
  //   },
  //   prepare (selection) {
  //     const {title} = selection
  //     return {
  //       title: title,
  //       media: Icon
  //     }
  //   }
  // }
}
