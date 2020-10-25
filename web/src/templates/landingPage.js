import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../containers/layout'
import LandingPage from '../components/Page/Page'
import SEO from '../components/SEO/SEO'

export const query = graphql`
  query($slug: String!) {
    sanityLandingPage(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      _rawFlexibleContentLayout
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
  }
`

const PagePage = ({data: {sanityLandingPage: page}}) => (
  <Layout title={page.title}>
    {page.seoSettings && page.seoSettings.title && page.seoSettings.description &&
        (<SEO title={page.seoSettings.title} description={page.seoSettings.description} openGraphImage={page.seoSettings.openGraphImage ? page.seoSettings.openGraphImage.asset.url : null} />
        )}
    <LandingPage
      title={page.title}
      flexibleContent={page._rawFlexibleContentLayout}
      slug={page.slug.current}
    />
  </Layout>
)

export default PagePage
