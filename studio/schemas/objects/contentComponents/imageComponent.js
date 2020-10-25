import {MdImage as Icon} from 'react-icons/md'

export default {
  name: 'imageComponent',
  title: 'Image Component',
  type: 'object',
  icon: Icon,
  fields: [
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Image'
    },
    {
      title: 'Image Width',
      name: 'imageWidth',
      description: 'Optional. These max widths are calculated without any left and right padding on the overall layout and each individual columns. Default is Full Width.',
      type: 'string',
      options: {
        list: [
          {title: '6XL (max 1440px full wide)', value: 'image6XL'}, // Full Width
          {title: '5XL (max 700px wide)', value: 'image5XL'}, // 1/2 width
          {title: '4XL (max 566px wide)', value: 'image4XL'}, // In betwen 1/2 and 1/3
          {title: '3XL (max 454px wide)', value: 'image3XL'}, // 1/3 Width
          {title: '2XL (max 330px wide)', value: 'image2XL'}, // 1/4 Width
          {title: 'XL (max 256px wide)', value: 'imageXL'}, // 1/5
          {title: 'LG (max 206px wide)', value: 'imageLG'}, // 1/6
          {title: 'MD (max 170px wide)', value: 'imageMD'}, // 1/7
          {title: 'SM (max 145px wide)', value: 'imageSM'}, // 1/8
          {title: 'XS (max 125px wide)', value: 'imageXS'} // 1/9
        ]
      }
    },
    {
      title: 'Lightbox',
      name: 'lightbox',
      description: 'When enabled, the image will work as a lightbox. When a visitor clicks the Image they will see a larger version. If this is enabled the Link below will be ignored.',
      type: 'boolean'
    },
    {
      title: 'Image Link URL',
      name: 'link',
      type: 'url',
      description: 'Optional',
      validation: Rule => Rule.uri({'allowRelative': true, scheme: ['https', 'http']})
    },
    {
      title: 'Open link in a new tab',
      name: 'blank',
      description: 'This will open up the link in a new tab.',
      type: 'boolean'
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
