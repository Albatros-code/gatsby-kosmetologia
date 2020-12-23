

module.exports = {
  pathPrefix: process.env.GHPAGES ? "/gatsby-kosmetologia" : "/",
  siteMetadata: {
    title: 'WJ Kosmetologia',
    author: 'Albatros­'
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    //`gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
        plugins: [
          `gatsby-plugin-sharp`,
          `gatsby-transformer-sharp`,
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
        plugins: [
          `gatsby-transformer-json`
        ]
      },
    },
  ],
}


// {
//   plugins: [`gatsby-plugin-react-helmet`],
// }

//`gatsby-transformer-json`,