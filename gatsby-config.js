module.exports = {
  siteMetadata: {
    title: 'Cesar Mejia',
    author: 'Cesar Napoleon Mejia Leiva',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
}
