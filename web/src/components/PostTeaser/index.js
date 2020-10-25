import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './teaser.module.css'

const PostTeaser = ({id, title, slug, date, category, tags, summary, image}) => {
  return (
    <>
      <article className={styles.root} key={id}>

        <div className={styles.contentWrapper}>

          <h3 className={styles.postTitle}><Link to={`/blog/${slug}`}>{title}</Link></h3>

          {date && (<p className={styles.postDate}>{date}</p>)}
          {summary && (<p className={styles.postSummary}>{summary}</p>)}

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

        </div>

        {image && (<div className={styles.imageWrapper}>
          <Link to={`/blog/${slug}`}><Img loading='eager' fluid={image.asset.fluid} alt={image.alt} /></Link>
        </div>)}

      </article>
    </>
  )
}
export default PostTeaser
