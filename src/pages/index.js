import React from "react"
import 'normalize.css';
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import SEO from '../components/seo';

export default ({ data }) => {
  return (
    <Layout>
      <SEO />
      <div>
        <h1>Thoughts</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} style={{ textDecoration: `none` }}>
              <h3>{node.frontmatter.title}{" "} - <span>{node.frontmatter.date}</span></h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

