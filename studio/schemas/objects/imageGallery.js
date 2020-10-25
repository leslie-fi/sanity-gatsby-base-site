import React from 'react'
import {MdPictureAsPdf as Icon} from 'react-icons/md'

const GalleryPreview = ({value}) => {
  console.log({value})

  const ImageWrapper = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
    gridRowGap: '20px'
  }

  const convertImage = (image) => {
    let OrigFile = image
    OrigFile = OrigFile.split('-')
    const FileExt = OrigFile.pop()
    // const FileStart = OrigFile.shift()
    return 'https://cdn.sanity.io/images/' + process.env.SANITY_STUDIO_API_PROJECT_ID + '/production/' + OrigFile.join('-') + '.' + FileExt + '?w=240&h=150&fit=crop'
  }

  return (
    <div style={ImageWrapper}>
      {value.images && value.images && value.images.map(image => (
        <div key={image._key}>
          {image.asset && image.asset._ref && (
            <img src={convertImage(image.asset._ref)} key={image._key} />
          )}
        </div>
      ))}
    </div>

  )
}

export default {
  type: 'object',
  name: 'imageGallery',
  title: 'Image Gallery',
  Icon: Icon,
  fields: [
    {
      type: 'array',
      name: 'images',
      title: 'Images',
      of: [{type: 'mainImage'}],
      options: {
        layout: 'grid'
      }
    }
  ],
  preview: {
    select: {
      images: 'images'
    },
    component: GalleryPreview
  }
}
