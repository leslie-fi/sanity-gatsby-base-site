import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styles from './blogview.module.css'
const Page = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: {local: {ne: null}}, title: { ne: null } },
        sort: {order: DESC, fields: publishedAt___local} limit: 4) {
        edges {
          node {
            id
            title
            slug {
              current
            }
            publishedAt {
              local
              date: local(formatString: "MMMM Do, YYYY")
            }
            mainImage {
              asset {
                fluid(maxWidth:305) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            summary
            category {
              id
              title
              slug {
                current
              }
            }
            tags {
              id
              title
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)
  // return <pre>{JSON.stringify(data, null, 4)}</pre>
  return (
    <ul className={styles.contentviews__wrapper}>
      {data.allSanityPost.edges.map(post => (
        <li key={post.node.id}>
          <h3><Link to={`/blog/${post.node.slug.current}`}>{post.node.title}</Link></h3>
          {post.node.mainImage && post.node.mainImage.asset && (<div className={styles.imgWrapper}><Img loading='eager' fluid={post.node.mainImage.asset.fluid} alt={post
            .node.mainImage.alt} style={{marginTop: '10px', maxWidth: '305px', marginLeft: 'auto', marginRight: 'auto'}} /></div>)}
          {/* {post.node.mainImage && post.node.mainImage.asset && (<div className={styles.imgWrapper}><Img loading='eager' fluid={post.node.mainImage.asset.fluid} alt={post.node.mainImage.alt} style={{marginTop: '10px'}} /></div>)} */}
          <p className={styles.contentviews__date}>{post.node.publishedAt.date}</p>
        </li>
      ))}
    </ul>
  )
}

export default Page
