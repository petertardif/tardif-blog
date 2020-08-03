import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--first-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  margin: 0;
  padding: 0 5%;
  width: 100%;
  flex: 0 0 auto;
  box-shadow: 0px 0px 4px black;

  & ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding-inline-start: 0px;
  }

  & h2 {
    display: inline;
  }

  & ul > a {
    color: rgb(253, 253, 253);
    display: inline-block;
    margin-right: 1rem;
    text-decoration: none;
  }
  
  & .link {
    background-image: none;
    color: rgb(253, 253, 253);
    text-decoration: none;
    text-shadow: none;
  }

  & .listlink {
    color: rgb(253, 253, 253);
    display: inline-block;
    margin-right: 1rem;
    text-decoration: none;
  }

  & .listlink:hover, .link:hover {
    color: var(--fifth-color);
  }
`;

export default function Header() {
  const ListLink = props => (
    <li >
      <Link to={props.to} className="listlink" >{props.children}</Link>
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
    <HeaderContainer>
      <Link to="/" className="link">
        <h2> {data.site.siteMetadata.title} </h2>
      </Link>
      <ul >
        <ListLink to="/about/">About</ListLink>
        <a className="listlink" href="https://www.petertardif.com/">Portfolio</a>
      </ul>
    </HeaderContainer>
  )
}
