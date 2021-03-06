import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          keywords
          themeColor
        }
      }
    }
  `)
  return (
    <Helmet
      title={`${title} | ${data.site.siteMetadata.title} `}
      meta={[
        {
          name: "description",
          content: data.site.siteMetadata.description,
        },
        {
          name: "keywords",
          content: data.site.siteMetadata.keywords,
        },
        {
          name: "theme-color",
          content: data.site.siteMetadata.themeColor,
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
  )
}

export default Head
