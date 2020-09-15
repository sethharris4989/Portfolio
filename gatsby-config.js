module.exports = {
  siteMetadata: {
    title: `Seth Harris Portfolio | Web Developer`,
    description: `This is a space to share my portfolio.`,
    author: `Seth Harris`,
  },
  plugins: [
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ybci46gea794`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `GCzrRAnU0wtUl_AT3FIntg4c0K7VNR0XzfYhZbwbOMw`,
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `seth-harris-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#141414`,
        theme_color: `#141414`,
        display: `minimal-ui`,
        icon: `src/images/sh_logo_final.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
