import React from "react";
import styled from "styled-components";
import { getCountryFlag } from "../../../../services/api/UserAPI";

export default function Country(props) {
  return (
    <Flag>
      <img src={getCountryFlag(props.src)} alt={props.alt} />
    </Flag>
  )
}


const Flag = styled.figure`
  width: auto;
  height: auto;
  // position: absolute;
  // top: -75px;
  // right: 0;

  img{
    width: 3rem;
  }
`;