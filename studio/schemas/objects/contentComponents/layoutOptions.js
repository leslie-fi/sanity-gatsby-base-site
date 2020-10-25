import {IoMdOptions as Icon} from 'react-icons/md'

export default {
  name: 'layoutOptions',
  title: 'Layout Options',
  type: 'object',
  icon: Icon,
  options: {collapsible: true, collapsed: true},
  fields: [
    {
      title: 'Layout Styles',
      name: 'layoutStyles',
      type: 'array',
      description: 'Optional',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'No Top Padding', value: 'noTopPadding'},
          {title: 'No Bottom Padding', value: 'noBottomPadding'},
          {title: 'No Top Margin', value: 'noTopMargin'},
          {title: 'No Bottom Margin', value: 'noBottomMargin'},
          {title: 'Vertically Center Align Content', value: 'verticallyCenterAlign'},
          {title: 'Add a white background in the content area over the background color/pattern', value: 'whiteBackground'}
        ]
      }
    },
    {
      title: 'Layout Theme',
      name: 'layoutTheme',
      type: 'string',
      description: 'Optional',
      options: {
        list: [
          {title: 'Solid - Blue', value: 'solidBlueTheme'},
          {title: 'Solid - Pink', value: 'solidPinkTheme'},
          {title: 'Solid - Green', value: 'solidGreenTheme'},
          {title: 'Solid - Light Green', value: 'solidLightGreenTheme'},
          {title: 'Solid - Light Gray', value: 'solidLightGrayTheme'},
          {title: 'Solid - Dark Gray', value: 'solidDarkGrayTheme'},
          {title: 'Dots - Blue', value: 'dotsBlueTheme'},
          {title: 'Mountains - Blue', value: 'mountainsBlueTheme'},
          {title: 'Mechanical Parts - Gray', value: 'mechanicalPartsGrayTheme'},
          {title: 'Shapes - Gray', value: 'shapesGrayTheme'},
          {title: 'Pencils - Pink', value: 'pencilsPinkTheme'},
          {title: 'Cube - Pink', value: 'cubePinkTheme'},
          {title: 'Topo - Yellow', value: 'topoYellowTheme'},
          {title: 'Curcuit Board - Green', value: 'curcuitBoardGreenTheme'}
        ]
      }
    }
    // {
    //   title: 'Background Image',
    //   name: 'imageBackground',
    //   type: 'imageBackground',
    //   description: 'Optional'
    // }
  ]
}
