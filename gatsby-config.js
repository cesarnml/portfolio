module.exports = {
  siteMetadata: {
    title: 'Cesar Mejia',
    author: 'Cesar Napoleon Mejia Leiva',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
}
