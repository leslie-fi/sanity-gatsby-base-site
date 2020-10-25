// import ConditionalFields from '../../../components/ConditionalFields.js'
import {BsSquare as Icon, BsLayoutThreeColumns as Icon3} from 'react-icons/bs'
import {FiColumns as Icon2} from 'react-icons/fi'
import {GrColumns as Icon4} from 'react-icons/gr'
import {GoAlert as Icon0} from 'react-icons/go'
// 1 BsSquare
// 2 FiColumns
// 3 BsLayoutThreeColumns
// 4 GrColumns

export default {
  title: 'Flexible Content Layout',
  name: 'flexibleContentLayout',
  type: 'object',
  fields: [
    {
      title: 'Content Title',
      name: 'title',
      type: 'string',
      description: 'Required. This is only shown in the CMS.'
    },
    {
      title: 'Layout Options',
      name: 'flexibleContentLayoutOptions',
      type: 'flexibleContentLayoutOptions'
    },
    {
      title: 'Layout Header',
      name: 'columnHeaderContent',
      type: 'flexibleContent',
      description: 'Optional.',
      options: {collapsible: true, collapsed: true}
    },
    {
      title: 'Column One\'s Content',
      name: 'columnOneContent',
      type: 'flexibleContent',
      validation: Rule => Rule.required()
    },
    {
      title: 'Column Two\'s Content',
      name: 'columnTwoContent',
      type: 'flexibleContent'
    },
    {
      title: 'Column Three\'s Content',
      name: 'columnThreeContent',
      type: 'flexibleContent'
    },
    {
      title: 'Column Four\'s Content',
      name: 'columnFourContent',
      type: 'flexibleContent'
    },
    {
      title: 'Layout Footer',
      name: 'columnFooterContent',
      type: 'flexibleContent',
      description: 'Optional.',
      options: {collapsible: true, collapsed: true}
    }
  ],
  preview: {
    select: {
      title: 'title' || '',
      oneColumn: 'columnOneContent.columnContent',
      twoColumn: 'columnTwoContent.columnContent',
      threeColumn: 'columnThreeContent.columnContent',
      fourColumn: 'columnFourContent.columnContent'
    },
    prepare ({title, oneColumn, twoColumn, threeColumn, fourColumn}) {
      let icon = Icon
      // let title = title
      if (fourColumn && fourColumn.length > 0) {
        title = `Four Column Layout: ${title}`
        icon = Icon4
      } else if (threeColumn && threeColumn.length > 0) {
        title = `Three Column Layout: ${title}`
        icon = Icon3
      } else if (twoColumn && twoColumn.length > 0) {
        title = `Two Column Layout: ${title}`
        icon = Icon2
      } else if (oneColumn && oneColumn.length > 0) {
        title = `One Column Layout: ${title}`
        icon = Icon
      } else {
        title = `NO CONTENT: ${title}`
        icon = Icon0
      }
      return {
        title: title,
        media: icon
      }
    }
  }
}
