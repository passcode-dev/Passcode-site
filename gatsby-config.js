module.exports = {
  siteMetadata: {
    title: 'Passcode - Software House',
    description: 'Desenvolvimento de aplicativos móveis, sites, IA, testes de software e soluções em nuvem para negócios.',
    author: '@passcode',
    keywords: ['software house', 'desenvolvimento de aplicativos móveis', 'design de sites', 'testes de software', 'inteligência artificial', 'back-end', 'soluções em nuvem', 'qualidade de software'],
    siteUrl: 'https://www.passcode.com.br/', // Substitua pelo seu domínio
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
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
};