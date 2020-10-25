import {GoAlert as Icon} from 'react-icons/go'

export default {
  type: 'object',
  name: 'alert',
  title: 'Sitewide Alert',
  icon: Icon,
  fields: [
    {
      name: 'alertTitle',
      title: 'Alert Title',
      type: 'string',
      description: 'This is an administrative title only seen here.'
    },
    {
      name: 'alertBody',
      title: 'Alert Message',
      type: 'bodyPortableText'
    },
    {
      title: 'Alert Type',
      name: 'alertType',
      type: 'string',
      description: 'Required. Changing the Alert Type will affect the alert background color.',
      of: [{type: 'string'}],
      // validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Warning', value: 'alertWarning'},
          {title: 'Notice', value: 'alertNotice'}
        ]
      }
    },
    {
      title: 'Enable Sitewide Alert',
      name: 'alertEnabled',
      type: 'boolean',
      // validation: Rule => Rule.required(),
      description: 'This needs to be enabled to show on the site.'
    },
    {
      name: 'alertCookieName',
      type: 'slug',
      title: 'Cookie Name',
      description: 'This needs to be unique and if you are updating the alert message and you would like those who have closed the previous message still sees this message you NEED to change it.',
      options: {
        source: 'alert.alertTitle',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
      // validation: Rule => Rule.required()
    },
    {
      name: 'alertCookieMaxAge',
      type: 'number',
      title: 'Cookie Maximum Age',
      // validation: Rule => Rule.required(),
      description: 'This is the amount of days you would like the Cookie live in a browser when a user clicked to close an alert. This is typically 30, 60 or 90 days.'
    }
  ]
}
