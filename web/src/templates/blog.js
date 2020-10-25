import React from 'react'
import {graphql, Link} from 'gatsby'
import Teaser from '../components/PostTeaser/index'
import Layout from '../containers/layout'

import styles from './blog.module.css'

export default class BlogList extends React.Component {
  render () {
    const todayDate = new Date().toISOString().slice(0, 10)
    const posts = this.props.data.allSanityPost.edges.map(({node}) => node).filter(post => post.publishedAt.local <= todayDate)
    const {currentPage, numPages} = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/blog' : (currentPage - 1).toString()
    const nextPage =
      currentPage - 1 > 1 ? '/blog' : '/blog/' + (currentPage + 1).toString()

    return (
      <Layout>

        <div className='layout__wrapper  noTopMargin noBottomMargin dotsBlueTheme'>
          <div className='layout__oneCol content__wrapper--whiteBackground'>
            <div className='layout__colOne'>

              <div className={styles.pageTitleWrapper}>
                <h1 className={styles.pageTitle}>Compass Stories</h1>
              </div>

              {posts.map(post => (
                <Teaser key={post.id} title={post.title} summary={post.summary} slug={post.slug.current} date={post.publishedAt.date} category={post.category} tags={post.tags} image={post.mainImage} />
              ))}

              <ul className={styles.pagination}>
                {!isFirst && (
                  <li className={styles.prev}>
                    <Link to={prevPage} rel='prev'>
                      ← Previous Page
                    </Link>
                  </li>
                )}
                {Array.from({length: numPages}, (_, i) => (
                  <li key={`pagination-number${i + 1}`}>
                    {i + 1 === currentPage ? (
                      <> {i + 1} </>
                    ) : (
                      <Link to={`/blog/${i === 0 ? '' : i + 1}`}>{i + 1}</Link>
                    )}
                  </li>
                ))}
                {!isLast && (
                  <li className={styles.next}>
                    <Link to={nextPage} rel='next'>
                      Next Page →
                    </Link>
                  </li>
                )}
              </ul>

            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!, $today: Date!) {
    allSanityPost(sort: {order: DESC, fields: publishedAt___local}, limit: $limit, skip: $skip, filter: { slug: { current: { ne: null } }, title: { ne: null }, publishedAt: {local: {lte: $today}} }
    ) {
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
          summary
          mainImage {
            asset {
              fluid(maxWidth:400) {
                ...GatsbySanityImageFluid
              }
            }
          }
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
`
