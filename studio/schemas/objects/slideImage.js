export default {
  name: 'slideImage',
  title: 'Slide',
  type: 'object',

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required()
    },
    {
      name: 'link',
      type: 'url',
      validation: Rule => Rule.uri({'allowRelative': true, scheme: ['https', 'http']}),
      description: 'Optional link for the slide image.',
      title: 'Link'
    },
    {
      name: 'slideImage',
      title: 'Slide Image',
      type: 'image',
      description: 'The image needs to be a minimum of 900px wide.',
      validation: Rule => Rule.required(),
      options: {
        hotspot: false
      }
    }
  ]
}
