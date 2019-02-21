import React from "react";
import styled from "styled-components";

export default function Loader() {
  return (
    <BodyWrapper>
      <div className="wave-loader-wrapper">
        <img className="wave-loader" src={`${process.env.PUBLIC_URL}/images/wave.svg`} alt="" />
      </div>
    </BodyWrapper>
  )
}

const BodyWrapper = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
