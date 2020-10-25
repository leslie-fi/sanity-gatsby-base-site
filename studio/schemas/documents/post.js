import {FaNewspaper as Icon} from 'react-icons/fa'

export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon: Icon,
  liveEdit: false,
  // __experimental_actions: ['update', 'publish', 'create', 'delete'],
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
      description: 'This is used to setup the page URL and should not be changed after it is initiall setup or it might break links.',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Published at',
      name: 'publishedAt',
      options: {
        inputTime: false
      },
      type: 'richDate',
      'timezone': 'America/Denver',
      validation: Rule => Rule.required(),
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'authors',
      title: 'Author(s)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'author'
          }
        }
      ]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [
        {
          type: 'category'
        }
      ]
    },
    {
      title: 'Tag(s)',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'tag'
          }
        }
      ],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Post Summary',
      description:
        'This will be shown in the post teasers.',
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
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
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
