/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


module.exports = {
  pathPrefix: "/gatsby-kosmetologia",
  //pathPrefix: "/",
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