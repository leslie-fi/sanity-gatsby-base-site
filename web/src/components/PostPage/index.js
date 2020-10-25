import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import ContentComponents from '../serializers/contentComponents/index'
import FlexibleContentComponents from '../serializers/contentComponents/FlexibleContent'

// import styles from './page.module.css'
import styles from './post.module.css'

const Page = ({title, content, flexibleContent, date, category, tags, mainImage}) => {
  return (
    <article className={`${styles.root}`}>

      <div className={`content__wrapper ${styles.mainContent}`}>

        <div className={`layout__colOne layout__wrapper ${styles.innerMainContent}`}>

          <div className={styles.contentWrapper}>

            <h1 className={styles.postTitle}>{title}</h1>

            {date && (<p className={styles.postDate}>{date}</p>)}

            <div className={styles.postDets}>
              {category && category.slug && category.slug.current && (<div className={styles.postCategory}><p>Category: </p><Link to={`/blog/category/${category.slug.current}`}>{category.title}</Link></div>)}

              {tags && tags.length > 0 && (<div className={styles.postTags}>
                <p>Tags: </p>
                <ul>
                  {tags.map(tag => (
                    <li key={tag.id}><Link to={`/blog/tag/${tag.slug.current}`}>{tag.title}</Link></li>
                  ))}
                </ul>
              </div>
              )}
            </div>
            <p className={styles.back}><Link to={`/blog/`}>← Back to Compass Stories</Link></p>
          </div>

          {mainImage && (<div className={styles.imageWrapper}>
            <Img loading='eager' fluid={mainImage.asset.fluid} alt={mainImage.alt} />
          </div>)}

        </div>

        {flexibleContent && <FlexibleContentComponents blocks={flexibleContent} />}
        {content && <ContentComponents blocks={content} />}
      </div>

    </article>
  )
}
export default Page
