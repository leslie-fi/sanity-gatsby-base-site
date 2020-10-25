export default {
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
}
