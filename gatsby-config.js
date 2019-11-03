module.exports = {
  siteMetadata: {
    siteTitle: `Jana`,
    siteTitleAlt: `Jana Rajakumar | Portfolio`,
    siteHeadline: `Full Stack Web Developer | Freelancer | Ninja`,
    siteUrl: `http://jana19.org/`,
    siteDescription: `I’m passionate about creating great product experiences with clean and maintainable code`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jana Rajakumar`,
        short_name: `Jana`,
        description: `Full Stack Web Developer | Freelancer | Ninja`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#491E5A`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
