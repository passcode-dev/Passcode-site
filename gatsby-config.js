module.exports = {
  siteMetadata: {
    title: `PassCode`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`, // 🔥 Isso é essencial!
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:wght@400;500&family=Arial&display=swap'`,
          },
        ],
      },
    },
  ],
};