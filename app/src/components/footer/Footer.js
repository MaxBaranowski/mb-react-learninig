import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterName>Max Baranowski, 2019</FooterName>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  box-sizing: border-box;
  align-items: center;
  height: 35px;
  background-color: #1B242D;
  color: #fff;
`;

const FooterName = styled.figure`
  grid-column: 2 / 12;
  display: flex;
  justify-content: start;
`;
