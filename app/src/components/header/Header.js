import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderName>
        <Link className="nav-link-unset" to="/">
          Person List
        </Link>
      </HeaderName>
      <HeaderLinkCode>
        <a href="https://github.com/MaxBaranowski/mb-react-learninig/tree/person_list_project">
          <img src={`${process.env.PUBLIC_URL}/images/git-logo-dark.svg`} alt="" />
        </a>
      </HeaderLinkCode>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  box-sizing: border-box;
  align-items: center;
  height: 35px;
  background-color: #F68E18;;
`;

const HeaderName = styled.figure`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  justify-content: center;
`;

const HeaderLinkCode = styled.aside`
  grid-column: 6;
  display: flex;
  justify-content: center;
  a{
    width: 25px;
    height: 25px;
  }
`;