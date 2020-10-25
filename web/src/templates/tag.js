import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../containers/layout'
import Teaser from '../components/PostTeaser/index'
import SEO from '../components/SEO/SEO'
import styles from '../components/Page/page.module.css'

export const query = graphql`
  query($slug: String!, $today: Date!) {
    sanityTag(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      seoSettings {
        title
        description
        openGraphImage {
          asset {
            url
          }
        }
      }
    }
    allSanityPost(sort: {order: DESC, fields: publishedAt___local},
      filter: { slug: { current: { ne: null } }, title: { ne: null }, publishedAt: {local: {lte: $today}}, tags: {elemMatch: {slug: {current: {eq: $slug}}}} } ) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          summary
          mainImage {
            asset {
              fluid(maxWidth:400) {
                ...GatsbySanityImageFluid
              }
            }
          }
          publishedAt {
            local
            date: local(formatString: "MMMM Do, YYYY")
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
const TagPage = ({data: {sanityTag: page, allSanityPost: posts}}) => {
  const todayDate = new Date().toISOString().slice(0, 10)
  const postsTest = posts.edges.map(({node}) => node).filter(post => post.publishedAt.local <= todayDate)
  return (
    <Layout title={page.title}>
      <div className='layout__wrapper  noTopMargin noBottomMargin dotsBlueTheme'>
        <div className='layout__oneCol content__wrapper--whiteBackground'>
          <div className='layout__colOne'>

            {page.seoSettings && page.seoSettings.title && page.seoSettings.description &&
        (<SEO title={page.seoSettings.title} description={page.seoSettings.description} openGraphImage={page.seoSettings.openGraphImage ? page.seoSettings.openGraphImage.asset.url : null} />
        )}
            <div className={styles.pageTitleWrapper}>
              <h1 className={styles.pageTitle}>Tag: {page.title}</h1>
            </div>
            {postsTest.map(post => (
              <Teaser key={post.id} title={post.title} slug={post.slug.current} date={post.publishedAt.date} category={post.category} tags={post.tags} image={post.mainImage} summary={post.summary} />

            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TagPage
