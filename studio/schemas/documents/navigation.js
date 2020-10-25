import {MdMenu} from 'react-icons/md'

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: MdMenu,
  liveEdit: false,
  // __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required()
      ]
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{
        type: 'siteLink'
      }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
