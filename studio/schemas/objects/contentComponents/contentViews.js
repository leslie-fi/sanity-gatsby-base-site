import {MdViewCompact as Icon} from 'react-icons/md'

export default {
  name: 'contentViews',
  title: 'Content View',
  type: 'object',
  icon: Icon,
  options: {collapsible: true, collapsed: true},
  fields: [
    {
      title: 'Content View',
      name: 'contentView',
      type: 'string',
      description: 'Optional',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'View - Blog Post', value: 'blogPostView'},
          {title: 'View - Community Partner', value: 'communityPartnerView'},
          {title: 'View - Staff', value: 'staffView'},
          {title: 'View - Board', value: 'boardView'},
          {title: 'View - Careers', value: 'careersView'},
          {title: 'Community Funded - Donate', value: 'cfDonate'},
          {title: 'Community Funded - School Fees', value: 'cfSchoolFees'},
          {title: 'Webform - Contact', value: 'wfContact'},
          {title: 'Webform - Facility Rental', value: 'wfFacilityRental'},
          {title: 'Google Search', value: 'googleSearch'}
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'contentView'
    },
    prepare ({title}) {
      let viewTitle = title
      // let title = title
      if (title && title === 'blogPostView') {
        viewTitle = 'View - Blog Post'
      } else if (title && title === 'communityPartnerView') {
        viewTitle = 'View - Community Partner'
      } else if (title && title === 'staffView') {
        viewTitle = 'View - Staff'
      } else if (title && title === 'boardView') {
        viewTitle = 'View - Board'
      } else if (title && title === 'cfDonate') {
        viewTitle = 'Community Funded - Donate'
      } else if (title && title === 'cfSchoolFees') {
        viewTitle = 'Community Funded - School Fees'
      } else if (title && title === 'wfContact') {
        viewTitle = 'Webform - Contact'
      } else if (title && title === 'wfFacilityRental') {
        viewTitle = 'Webform - Facility Rental'
      } else if (title && title === 'googleSearch') {
        viewTitle = 'Google Search'
      } else {
        title = `NO CONTENT`
      }
      return {
        title: viewTitle,
        media: Icon
      }
    }
  }
}
