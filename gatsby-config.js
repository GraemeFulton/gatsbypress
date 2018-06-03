//this config is the theme stuff
const config = require('./themeConfig/config')


module.exports = {
  siteMetadata: { 
    title: 'GatsbyPress',
    subtitle: 'WordPress Gatsby Theme'
  },
  plugins: ['gatsby-plugin-react-helmet',
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  
  /**
   * Gatsby Wordpress Source Plugin
   * https://www.gatsbyjs.org/docs/wordpress-source-plugin-tutorial/
   */
  {
    resolve: 'gatsby-source-wordpress',
    options: {
      //replace this with your own url (shoutout 🐭 what I'm using it for: https://www.producthunt.com/upcoming/emailotter)
      baseUrl: '192.168.1.108:8888/content-otter',
      // The protocol. This can be http or https.
      protocol: 'http',
      // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
      // This feature is untested for sites hosted on Wordpress.com
      useACF: false,
      verboseOutput: true,
      concurrentRequests:10,
      excludedRoutes: ["/*/*/comments", "/yoast/**"],
      color: config.themeColor,
    },
  }
  ],

  
}

