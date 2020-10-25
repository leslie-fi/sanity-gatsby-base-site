export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name'
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
      name: 'image',
      type: 'mainImage',
      title: 'Headshot'
    },
    {
      name: 'shortBio',
      type: 'text',
      title: 'Short Bio'
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
      title: 'SEO Settings',
      name: 'seoSettings',
      type: 'seo'
      // validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
