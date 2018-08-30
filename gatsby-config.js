module.exports = {
  siteMetadata: {
    title: 'CENTANE YOUTH DEVELOPMENT',
  },
  plugins: ['gatsby-plugin-react-helmet',
            'gatsby-plugin-catch-links',
            // 'gatsby-transformer-sharp',
            // 'gatsby-plugin-sharp',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              path: './src/pages',
              name: 'pages',
          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              path: `./src/images`,
              name: 'images',
          },
      },
      'gatsby-transformer-remark',
  ],
}
