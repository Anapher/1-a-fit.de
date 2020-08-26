module.exports = {
  pathPrefix: "/1-a-fit.de",
  siteMetadata: {
    title: `1-a-fit`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    copyright: "1-a-fit GmbH",
    courses: [
      [null, null, "Bauch-Fit", null, null],
      [
        "Rücken-Fit",
        "Bauch/Beine/Po",
        "Bauch-Fit",
        "Bauch-Fit",
        "Bauch/Beine/Po",
      ],
      ["Bauch/Beine/Po", "Bauch-Fit", "Rücken-Fit", "Rücken-Fit", "Bauch-Fit"],
      [
        "Rücken-Fit",
        "Bauch/Beine/Po",
        "Bauch-Fit",
        "Rücken-Fit",
        "Bauch/Beine/Po",
      ],
      ["Bauch-Fit", "Rücken-Fit", "Rücken-Fit", "Bauch-Fit", "Bauch-Fit"],
      [
        "Bauch/Beine/Po",
        "Bauch/Beine/Po",
        "Bauch/Beine/Po",
        "Bauch/Beine/Po",
        "Bauch/Beine/Po",
      ],
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Roboto",
          },
          {
            family: "Work Sans",
            variants: ["800"],
          },
        ],
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
