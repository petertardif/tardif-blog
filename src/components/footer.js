import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterContainer = styled.footer`
  background-color: var(--first-color);
  width: 100%;
  flex-shrink: 0;

  & ul {
    display: flex;
    list-style: none; 
    justify-content: center; 
    padding: 20px;
  }
  & ul > a {
    text-shadow: none; 
    background-image: none; 
    text-decoration: none; 
    padding: 30px;
  }

  & .fontAwesomeIcon {
    color: #fefefe;
  }
  
  & .fontAwesomeIcon:hover {
    color: var(--fifth-color);
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <ul>
        <a href="/contact" rel="noopener noreferrer" >
          <FontAwesomeIcon icon="envelope" className="fontAwesomeIcon" size="lg" />
        </a>
        <a href="https://twitter.com/petertardif" rel="noopener noreferrer" target="_blank" >
          <FontAwesomeIcon icon={["fab", "twitter"]} className="fontAwesomeIcon" size="lg" />
        </a>
        <a href="https://github.com/petertardif" rel="noopener noreferrer" target="_blank" >
          <FontAwesomeIcon icon={["fab", "github"]} className="fontAwesomeIcon" size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/petertardif/" rel="noopener noreferrer" target="_blank" >
          <FontAwesomeIcon icon={["fab", "linkedin"]} className="fontAwesomeIcon" size="lg" />
        </a>
      </ul>
    </FooterContainer>
  )
}