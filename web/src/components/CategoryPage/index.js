import React from 'react'
import styles from './category.module.css'

const Page = ({title, posts}) => {
  return (
    <>
      <article className={styles.root}>
        <div className={styles.pageTitleWrapper}>
          <h1 className={styles.pageTitle}>{title}</h1>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.innerMainContent} >
            <pre>{JSON.stringify(posts, null, 4)}</pre>
          </div>
        </div>
      </article>
    </>
  )
}
export default Page
