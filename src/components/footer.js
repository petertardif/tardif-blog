import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
  return (
    <footer>
      <ul style={{ listStyle: `none`, display: `flex`, justifyContent: `center`, padding:`20px` }}>
        <Link to="mailto:peter.tardif@gmail.com" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, padding:`30px` }}>
          <FontAwesomeIcon icon="envelope" size="lg" />
        </Link>
        <Link to="https://twitter.com/petertardif" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, padding:`30px` }}>
          <FontAwesomeIcon icon={["fab", "twitter"]} style={{color:"#000000"}} size="lg" />
        </Link>
        <Link to="https://github.com/petertardif" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none`, padding:`30px` }}>
          <FontAwesomeIcon icon={["fab", "github"]} style={{color:"#000000"}} size="lg" />
        </Link>
        <Link to="https://www.linkedin.com/in/petertardif/" target="_blank" style={{ textShadow: `none`, backgroundImage: `none`, padding:`30px`, textDecoration: `none` }}>
          <FontAwesomeIcon icon={["fab", "linkedin"]} style={{color:"#000000"}} size="lg" />
        </Link>
      </ul>
    </footer>
  )
}