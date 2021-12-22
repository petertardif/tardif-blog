import React from "react"
import "normalize.css"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import kebabCase from "lodash/kebabCase"
import styled from "styled-components"

const TagList = styled.ul`
  display: flex;
  justify-content: space-evenly;
}
& li {
  list-style: none;
}
& li > a {
  text-decoration: none;
  margin: .2rem;
  padding: .4rem .6rem;
  font-size: 1rem;
  border-radius: 3rem;
  border-bottom: 0;
  white-space: nowrap;
  line-height: 1;
  font-weight: 600;
  box-shadow: 0.1rem 0.1rem 1rem -10px #888888
}
& a.development {
  background: #eff2fa;
  color: #3957d1;
}

& a.career {
  background: #d1f2f4;
  color: #27a9bf;
}
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO />
      <div>
        <h1>Learning with Tardif</h1>
        <div>
          <TagList>
            {data.allMarkdownRemark.group.map(tag => (
              <li key={tag.fieldValue}>
                <Link
                  to={`/tags/${kebabCase(tag.fieldValue)}/`}
                  className={tag.fieldValue}
                >
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </TagList>
        </div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} style={{ textDecoration: `none` }}>
              <h3>
                {node.frontmatter.title} - <span>{node.frontmatter.date}</span>
              </h3>
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
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
