import {MdEmail} from 'react-icons/md'

export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'],
  icon: MdEmail,
  liveEdit: false,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'flexibleContentLayout',
      title: 'Content',
      type: 'array',
      description: 'Add content to your site with this field. There is always four available columns, but the website will only show the columns that have content. So if you add content to only two columns, the site will only show two columns.',
      of: [{
        type: 'flexibleContentLayout'
      }]
    },
    {
      title: 'Form Settings',
      name: 'formSettings',
      type: 'form',
      validation: Rule => [
        Rule.required()
      ]
    },
    {
      title: 'SEO Settings',
      name: 'seoSettings',
      type: 'seo',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'seoSettings.title',
      description: 'seoSettings.description',
      media: 'mainImage'
    }
  }
}
