import React from "react";
import styled from "styled-components";
import { getCountryFlag } from "../../../../services/api/UserAPI";

export default function Country(props) {
  return (
    <Flag className={props.className}>
      <img src={getCountryFlag(props.src)} alt={props.alt} />
    </Flag>
  )
}


const Flag = styled.figure`
  width: auto;
  height: auto;

  img{
    width: 3rem;
  }
`;