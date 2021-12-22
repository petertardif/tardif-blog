import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About Learning with Tardif</h1>
    <p>
      I am a lifelong learner. Can't stop, will not stop, and besides, there are
      too many fascinating things out there.
    </p>
    <p>So saddle up. Get a cup of your favorite drink and learn with me. </p>
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
