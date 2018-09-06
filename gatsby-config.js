module.exports = {
  pathPrefix: `/study-english`,
  siteMetadata: {
    title: `英語勉強用ブログ`,
    description: `英語勉強用ブログ`,
    siteUrl: `https://5000164.github.io/study-english`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `英語勉強用ブログ`,
        short_name: `英語勉強用ブログ`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
            {
              allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                edges {
                  node {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      date
                      title
                    }
                  }
                }
              }
            }
          `,
            output: '/feed.xml',
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
