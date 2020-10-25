import {MdImage as Icon} from 'react-icons/md'

export default {
  name: 'imageBackground',
  title: 'Background Image',
  type: 'object',
  icon: Icon,
  fields: [
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Image'
    },
    {
      title: 'Image Type',
      name: 'imageType',
      type: 'string',
      options: {
        list: [
          {title: 'Background Cover', value: 'backgroundCover'},
          {title: 'Background Patter', value: 'backgroundPattern'}
        ]
      }
    }

  ],
  preview: {
    select: {
      title: 'mainImage.alt'
    },
    prepare (selection) {
      const {title} = selection
      return {
        title: title,
        media: Icon
      }
    }
  }
}
