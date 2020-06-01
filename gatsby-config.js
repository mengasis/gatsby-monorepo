module.exports = {
  siteMetadata: {
    title: 'Ecommerce webapp',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },
  ],
}
