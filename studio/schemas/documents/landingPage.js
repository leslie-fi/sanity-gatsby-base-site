import {MdWeb as Icon} from 'react-icons/md'

export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon: Icon,
  liveEdit: false,
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Titles should be catchy, descriptive, and not too long',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'DO NOT change this or it will break your site.',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'flexibleContentLayout',
      title: '(new) Content',
      type: 'array',
      description: 'Add content to your site with this field. There is always four available columns, but the website will only show the columns that have content. So if you add content to only two columns, the site will only show two columns.',
      of: [{
        type: 'flexibleContentLayout'
      }]
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
