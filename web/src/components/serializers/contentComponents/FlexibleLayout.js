import React from 'react'
// import {imageUrlFor} from '../../../lib/image-url'
import Content from './Content'

export default ({header, oneColumn, twoColumn, threeColumn, fourColumn, footer, layoutOptions}) => {
  // console.log({layoutOptions})
  // console.log(layoutOptions && layoutOptions.layoutStyles && layoutOptions.layoutStyles.includes('noTopMargin'))

  const layoutWrapperClasses = () => {
    let options = 'flexible__layout layout__wrapper '
    if (layoutOptions && layoutOptions.layoutStyles && layoutOptions.layoutStyles.includes('noTopMargin')) {
      options += ' noTopMargin'
    }
    if (layoutOptions && layoutOptions.layoutStyles && layoutOptions.layoutStyles.includes('noBottomMargin')) {
      options += ' noBottomMargin'
    }
    if (layoutOptions && layoutOptions.layoutStyles && layoutOptions.layoutStyles.includes('noTopPadding')) {
      options += ' noTopPadding'
    }
    if (layoutOptions && layoutOptions.layoutStyles && layoutOptions.layoutStyles.includes('noRightPadding')) {
      options += ' noRightPadding'
    }
    if (layoutOptions && layoutOptions.layoutStyles && layoutOptions.layoutStyles.includes('noBottomPadding')) {
      options += ' noBottomPadding'
    }
    if (layoutOptions && layoutOptions.layoutStyles && layoutOptions.layoutStyles.includes('noLeftPadding')) {
      options += ' noLeftPadding'
    }
    if (layoutOptions && layoutOptions.layoutTheme && layoutOptions.layoutTheme) {
      options += ` ${layoutOptions.layoutTheme}`
    }
    return options
  }

  const contentWrapperClasses = (style) => {
    // console.log({style})
    let options = 'flexible__content content__wrapper '
    if (style && style.layoutStyles && style.layoutStyles.includes('noLeftPadding')) {
      options += ' noLeftPadding'
    }
    if (style && style.layoutStyles && style.layoutStyles.includes('noRightPadding')) {
      options += ' noRightPadding'
    }
    if (style && style.layoutStyles && style.layoutStyles.includes('noTopPadding')) {
      options += ' noTopPadding'
    }
    if (style && style.layoutStyles && style.layoutStyles.includes('noBottomPadding')) {
      options += ' noBottomPadding'
    }
    if (style && style.layoutTheme) {
      options += ` ${style.layoutTheme}`
    }
    if (style && style.horizontalAlignment) {
      options += ` ${style.horizontalAlignment}`
    }
    if (style && style.verticalAlignment) {
      options += ` ${style.verticalAlignment}`
    }
    if (style && style.layoutStyles && style.layoutStyles.includes('whiteBackground')) {
      options += ' whiteBackground'
    }
    return options
  }

  // const contentWrapperClasses = (style) => {
  //   let options = 'flexible-content__wrapper'
  //   if (style && style.layoutStyles && style.layoutStyles.includes('whiteBackground')) {
  //     options += '--whiteBackground'
  //   }
  //   return options
  // }

  const wrapperClasses = () => {
    let options = ''
    if (layoutOptions && layoutOptions.layoutStyles && layoutOptions.layoutStyles.includes('whiteBackground')) {
      options = 'whiteBackground'
    }
    return options
  }

  const layoutGridWrapper = () => {
    if (fourColumn && fourColumn.columnContent && fourColumn.columnContent.length > 0) {
      return 'layout__fourCol'
    } else if (threeColumn && threeColumn.columnContent && threeColumn.columnContent.length > 0) {
      return 'layout__threeCol'
    } else if (twoColumn && twoColumn.columnContent && twoColumn.columnContent.length > 0) {
      return 'layout__twoCol'
    } else if (oneColumn && oneColumn.columnContent && oneColumn.columnContent.length > 0) {
      return 'layout__oneCol'
    } else {
      return 'layout__oneCol'
    }
  }

  return (

    <div className={`${layoutWrapperClasses()}`}>

      <div className={`${wrapperClasses()}`}>

        {header && header.columnContent && header.columnContent.length > 0 && (
          <div className={`flexible__content--wrapper wrap ${contentWrapperClasses(header && header.flexibleContentOptions && header.flexibleContentOptions)}`}>
            <div className='layout__header'>
              <Content content={header.columnContent} />
            </div>
          </div>
        )}

        <div className={`flexible__content--wrapper ${layoutGridWrapper()}`}>
          {oneColumn && oneColumn.columnContent && oneColumn.columnContent.length > 0 && (
            <div className={`layout__colOne ${contentWrapperClasses(oneColumn && oneColumn.flexibleContentOptions && oneColumn.flexibleContentOptions)}`}>
              <Content content={oneColumn.columnContent} />
            </div>
          )}
          {twoColumn && twoColumn.columnContent && twoColumn.columnContent.length > 0 && (
            <div className={`layout__colTwo ${contentWrapperClasses(twoColumn && twoColumn.flexibleContentOptions && twoColumn.flexibleContentOptions)}`}>
              <Content content={twoColumn.columnContent} />
            </div>
          )}
          {threeColumn && threeColumn.columnContent && threeColumn.columnContent.length > 0 && (
            <div className={`layout__colThree ${contentWrapperClasses(threeColumn && threeColumn.flexibleContentOptions && threeColumn.flexibleContentOptions)}`}>
              <Content content={threeColumn.columnContent} />
            </div>
          )}
          {fourColumn && fourColumn.columnContent && fourColumn.columnContent.length > 0 && (
            <div className={`layout__colFour ${contentWrapperClasses(fourColumn && fourColumn.flexibleContentOptions && fourColumn.flexibleContentOptions)}`}>
              <Content content={fourColumn.columnContent} />
            </div>
          )}
        </div>

        {footer && footer.columnContent && footer.columnContent.length > 0 && (
          <div className={`flexible__content--wrapper wrap`}>
            <div className={`layout__footer ${contentWrapperClasses(footer && footer.flexibleContentOptions && footer.flexibleContentOptions)}`}>
              <Content content={footer.columnContent} />
            </div>
          </div>
        )}

      </div>
    </div>

  )
}
