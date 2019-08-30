module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    description:
      "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "@gatsbyjs",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Hello World",
        short_name: "Test",
        start_url: "/",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
        lang: "en",
        localize: [
          {
            start_url: "/es/",
            lang: "es",
            name: "Hola Mundo",
          },
        ],
      },
    },
  ],
}
