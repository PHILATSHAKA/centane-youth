module.exports = {
  siteMetadata: {
     title: 'Centane Youth Development Structure',
  },
  pathPrefix: "/centane-youth",
  plugins: [
            'gatsby-plugin-react-helmet',
            'gatsby-plugin-catch-links',
            // 'gatsby-remark-copy-linked-files',
            // 'gatsby-plugin-sass',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'pages',
              path: `${__dirname}/src/pages`,

          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: 'images',
              maxWidth: 1080,
              path: `${__dirname}/src/images`,

          },
      },
      'gatsby-transformer-remark',
  ],
}
