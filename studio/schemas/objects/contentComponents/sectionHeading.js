import {BsCardHeading as Icon} from 'react-icons/bs'

export default {
  name: 'sectionHeading',
  title: 'Section Heading',
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
          {title: 'Left Aligned', value: 'leftAligned'},
          {title: 'Center Aligned', value: 'centerAligned'}
        ]
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Required',
      validation: Rule => Rule.required()
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'text',
      rows: 2,
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
      description: 'subTitle'
    },
    prepare (selection) {
      const {title, description} = selection
      return {
        title: title,
        subtitle: description,
        media: Icon
      }
    }
  }
}
