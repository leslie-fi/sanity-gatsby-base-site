export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Sitewide Settings',
  // __experimental_actions: ['update', 'publish'],
  liveEdit: false,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title',
      description: 'This is used in the sitewide footer.'
    },
    {
      name: 'alert',
      title: 'Sitewide Alert',
      type: 'alert',
      options: {collapsible: true, collapsed: true}
    },
    {
      title: 'Global SEO (fallback) Settings',
      name: 'seoSettings',
      type: 'seo',
      options: {collapsible: true, collapsed: true}
      // validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
