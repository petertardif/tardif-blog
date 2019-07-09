import React from "react"
import 'normalize.css';
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

export default ({ data }) => {
  return (
    <Layout> 
      <div>
        <h1>Thoughts and Ideas</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} style={{ textDecoration: `none` }}>
              <h3>{node.frontmatter.title}{" "} - {node.frontmatter.date}</h3>
              <p>{node.excerpt}</p>
            </Link>
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

