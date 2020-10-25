import {BsLink as Icon} from 'react-icons/bs'

export default {
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  icon: Icon,
  fields: [
    {
      title: 'Link Text',
      name: 'linkText',
      type: 'string',
      description: 'Required',
      validation: Rule => Rule.required()
    },
    {
      title: 'Link URL',
      name: 'link',
      type: 'url',
      description: 'Required. Example: For an internal Compass link use: /contact-us/ (include the slashes too). For an external link use the full URL with the https, so Google would be https://google.com',
      validation: Rule => Rule.uri({'allowRelative': true, scheme: ['https', 'http']}).required()
    },
    {
      title: 'New tab',
      name: 'blank',
      description: 'This will open up the link in a new tab.',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      linkType: 'linkText',
      link: 'link'
    },
    prepare (selection) {
      const {link, linkType} = selection
      return {
        title: linkType,
        subtitle: link,
        media: Icon
      }
    }
  }
}
