import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to} style={{ textDecoration: `none` }}>{props.children}</Link>
    </li>
  )

  return (
    <>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none` }}>
        <h3 style={{ display: `inline` }}> {data.site.siteMetadata.title} </h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </>
  )
}
