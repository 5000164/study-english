import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class IndexPage extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <Helmet>
          <html lang="ja" />
          <meta charSet="utf-8" />
          <title>{siteTitle}</title>
          <meta name="description" content="英語勉強用ブログ" />
        </Helmet>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <Link to={node.fields.slug}>{title}</Link>
              <div>{node.frontmatter.date}</div>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
          }
        }
      }
    }
  }
`
