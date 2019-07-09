import React from 'react';
import styles from "../styles/header.module.css"
import { Link, useStaticQuery, graphql } from 'gatsby';

export default function Header() {  
  const ListLink = props => (
    <li >
      <Link to={props.to} className={styles.listlink} >{props.children}</Link>
    </li>
  )

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
  
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <h3 className={styles.h3}> {data.site.siteMetadata.title} </h3>
      </Link>
      <ul className={styles.ul} >
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header> 
  )
}
  