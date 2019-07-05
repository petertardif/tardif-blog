import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>Here you can read all about my latest thoughts: what I am learning, loving, creating, and debugging.</p>
  </Layout> 
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`