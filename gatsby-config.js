module.exports = {
  siteMetadata: {
    title: "Web Developer",
    author: "Eddie Chu",
    description: "Eddie Chu is a front end developer in Sacramento, CA",
    keywords: "Eddie Chu, Eddie, Chu, Web Developer, Front end Web Development, Coding, Development, Website, Javascript, HTML, CSS, SASS, React, Node, UI, Sacramento, California "
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    }
  ],
}
