import React from 'react'
import styles from './tag.module.css'

const Page = ({title, posts}) => {
  return (

    <article className={`layout__wrapper ${styles.root}`}>
      <div className={`layout__oneCol content__wrapper ${styles.mainContent}`}>
        <div className={`layout__colOne ${styles.innerMainContent}`}>

          <div className={styles.pageTitleWrapper}>
            <h1 className={styles.pageTitle}>{title}</h1>
          </div>

          <pre>{JSON.stringify(posts, null, 4)}</pre>

        </div>
      </div>
    </article>
  )
}
export default Page
