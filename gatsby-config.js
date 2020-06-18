const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Peter Tardif Blog`,
    titleTemplate: `%s · Peter Tardif - Full Stack Developer`,
    description: `The Ideas, thoughts, and words of Full Stack Developer, Peter Tardif`,
    url: `https://blog.petertardif.com`,
    image: `/images/PeterTardif.jpeg`,
    twitterUsername: `@petertardif`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
