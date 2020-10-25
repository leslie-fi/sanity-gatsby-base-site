import {IoMdOptions as Icon} from 'react-icons/md'

export default {
  name: 'flexibleContent',
  title: 'Content',
  type: 'object',
  icon: Icon,
  // options: {collapsible: true, collapsed: true},
  fields: [
    {
      name: 'columnContent',
      title: 'Column Content',
      type: 'array',
      options: {collapsible: true, collapsed: true},
      of: [
        {type: 'textBlock'},
        {type: 'sectionHeading'},
        {type: 'callOut'},
        {type: 'imageComponent'},
        {type: 'youtube'},
        {type: 'vimeo'},
        {type: 'contentViews'}
      ]
    },
    {
      title: 'Options',
      name: 'flexibleContentOptions',
      type: 'flexibleContentOptions'
    }
  ]
}
