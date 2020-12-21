
module.exports = {
  pathPrefix: process.env.GHPAGES ? "/gatsby-kosmetologia" : "/",
  siteMetadata: {
    title: 'WJ Kosmetologia',
    author: 'Albatros­'
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
      },
    },
  ],
}


// {
//   plugins: [`gatsby-plugin-react-helmet`],
// }