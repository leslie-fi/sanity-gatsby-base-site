import {BsCardHeading as Icon} from 'react-icons/bs'

export default {
  name: 'callOut',
  title: 'Callout',
  type: 'object',
  icon: Icon,
  // liveEdit: false,
  fields: [
    {
      title: 'Layout Style',
      name: 'layoutStyle',
      type: 'string',
      description: 'Required',
      validation: Rule => Rule.required(),
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Stack', value: 'stack'},
          {title: 'Column (use with an image)', value: 'column'}
        ]
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional'
      // validation: Rule => Rule.required()
    },
    {
      name: 'subText',
      title: 'Sub Text',
      rows: 2,
      type: 'bodyPortableText',
      description: 'Optional'
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'cta',
      description: 'Optional'
    },
    {
      title: 'Buttom on the bottom',
      description: 'Align the button to the bottom of the section.',
      name: 'buttonOnTheButton',
      type: 'boolean'
    },
    {
      title: 'Image or Icon',
      name: 'mainImage',
      type: 'mainImage',
      description: 'Optional'
    },
    {
      title: 'Content Options',
      name: 'flexibleContentOptions',
      type: 'flexibleContentOptions'
    }
  ],
  preview: {
    select: {
      title: 'title',
      text: 'subText',
      ctaTitle: 'cta.linkText',
      image: 'mainImage',
      style: 'layoutStyle'
    },
    prepare (selection) {
      const {title, ctaTitle, image, text, style} = selection
      const newTitle = title || `${ctaTitle}`
      const description = () => {
        let desc = ''
        if (style) {
          desc += `style (${style}), `
        }
        if (title) {
          desc += 'Heading, '
        }
        if (text) {
          desc += 'Text, '
        }
        if (ctaTitle) {
          desc += 'CTA, '
        }
        if (image) {
          desc += 'Image '
        }

        return desc
      }
      return {
        title: newTitle,
        subtitle: description(),
        media: Icon
      }
    }
  }
}
