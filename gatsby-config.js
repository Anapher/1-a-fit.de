module.exports = {
  pathPrefix: "/1-a-fit.de",
  siteMetadata: {
    title: `1-a-fit`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    copyright: " 1-a-fit Betriebs GmbH",
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
    maps: {
      vellmar: {
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1761.8956453644996!2d9.467387131307557!3d51.35348729771868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb3eeff4836b69%3A0xa0402b272e75299e!2s1-a-fit!5e0!3m2!1sde!2sde!4v1598524359407!5m2!1sde!2sde",
        info: "Brüder-Grimm-Str. 26, 34246 Vellmar\nTel: 0561 861 555 16",
      },
      kassel: {
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.225798481493!2d9.522441316139112!3d51.30696997960263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb38977b1ed64d%3A0x452188ff64323978!2sLeipziger%20Str.%20149%2C%2034123%20Kassel!5e0!3m2!1sde!2sde!4v1598524836755!5m2!1sde!2sde",
        info: "Leipziger Str. 149, 34123 Kassel\nTel: 0561 820 828 58",
      },
    },
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
