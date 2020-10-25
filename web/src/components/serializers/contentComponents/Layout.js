import React from 'react'
// import {imageUrlFor} from '../../../lib/image-url'
import Content from './Content'

export default ({header, oneColumn, twoColumn, threeColumn, fourColumn, footer, layoutOptions}) => {
  // console.log({layoutOptions})
  // console.log(layoutOptions && layoutOptions.layoutStyles && layoutOptions.layoutStyles.includes('noTopMargin'))

  const layoutClasses = () => {
    let options = 'layout__wrapper '
    if (layoutOptions && layoutOptions.layoutStyles && layoutOptions.layoutStyles.includes('noTopMargin')) {
      options += ' noTopMargin'
    }
    if (layoutOptions && layoutOptions.layoutStyles && layoutOptions.layoutStyles.includes('noBottomMargin')) {
      options += ' noBottomMargin'
    }
    if (layoutOptions && layoutOptions.layoutStyles && layoutOptions.layoutStyles.includes('noTopPadding')) {
      options += ' noTopPadding'
    }
    if (layoutOptions && layoutOptions.layoutStyles && layoutOptions.layoutStyles.includes('noBottomPadding')) {
      options += ' noBottomPadding'
    }
    if (layoutOptions && layoutOptions.layoutTheme && layoutOptions.layoutTheme) {
      options += ` ${layoutOptions.layoutTheme}`
    }
    return options
  }

  const wrapperClasses = () => {
    let options = 'content__wrapper'
    if (layoutOptions && layoutOptions.layoutStyles && layoutOptions.layoutStyles.includes('whiteBackground')) {
      options += '--whiteBackground'
    }
    return options
  }

  const layoutClass = () => {
    if (fourColumn && fourColumn.length > 0) {
      return 'layout__fourCol'
    } else if (threeColumn && threeColumn.length > 0) {
      return 'layout__threeCol'
    } else if (twoColumn && twoColumn.length > 0) {
      return 'layout__twoCol'
    } else if (oneColumn && oneColumn.length > 0) {
      return 'layout__oneCol'
    } else {
      return 'layout__oneCol'
    }
  }

  return (
    <>
      <div className={`${layoutClasses()}`}>
        <div className={`${layoutClass()} ${wrapperClasses()}`}>
          {header && header.length > 0 && (
            <div className='layout__header'>
              <Content content={header} />
            </div>
          )}
        </div>
        <div className={`${layoutClass()} ${wrapperClasses()}`}>

          {oneColumn && oneColumn.length > 0 && (
            <div className='layout__colOne'>
              <Content content={oneColumn} />
            </div>
          )}
          {twoColumn && twoColumn.length > 0 && (
            <div className='layout__colTwo'>
              <Content content={twoColumn} />
            </div>
          )}
          {threeColumn && threeColumn.length > 0 && (
            <div className='layout__colThree'>
              <Content content={threeColumn} />
            </div>
          )}
          {fourColumn && fourColumn.length > 0 && (
            <div className='layout__colFour'>
              <Content content={fourColumn} />
            </div>
          )}
        </div>
        <div className={`${layoutClass()} ${wrapperClasses()}`}>
          {footer && footer.length > 0 && (
            <div className='layout__footer'>
              <Content content={footer} />
            </div>
          )}
        </div>
      </div>

    </>
  )
}
