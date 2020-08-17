module.exports = {
  siteMetadata: {
    title: `Tailwind Snippets`,
    description: `Layout and component snippets for TailwindCSS`,
    author: `m-abdelwahab`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tailwind-snippets`,
        short_name: `tailwind-snippets`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tailwindcss.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    // purgeCSS removes selectors with dashes
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        whitelist: [
          "react-tabs",
          "react-tabs__tab-list",
          "react-tabs__tab",
          "react-tabs__tab--selected",
          "react-tabs__tab:focus",
          "react-tabs__tab:focus:after",
          "react-tabs__tab-panel",
          "react-tabs__tab-panel--selected",
        ],
      },
    },
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        exclude: [
          `/dev-404-page/`,
          `/404/`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback/`,
        ],
      },
    },
  ],
}
