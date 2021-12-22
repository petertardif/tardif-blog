import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Comments from "../components/Comments"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  let secondaryImgFluid = post.frontmatter.secondaryImage.childImageSharp.fluid.src
    .split("/")
    .at(-1)

  let secondaryImage =
    secondaryImgFluid === "PeterTardif.jpg" ? (
      <></>
    ) : (
      <Img fluid={post.frontmatter.secondaryImage.childImageSharp.fluid} />
    )

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt || "nothin’"}
        image={featuredImgFluid.src}
        pathname={post.fields.slug}
        article
      />
      <>
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.date}</h3>
        <Img fluid={featuredImgFluid} alt={post.frontmatter.altText} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {secondaryImage}
        <Comments />
      </>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        altText
        secondaryImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
