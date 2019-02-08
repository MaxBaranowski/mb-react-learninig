import React from "react";
import styled from "styled-components";

export default function Avatar(props) {
  return (
    <>
      <AvatarImage src={props.src} alt={props.alt} />
    </>
  )
}

const AvatarImage = styled.img`
  border-radius: 50%;
  border: 0.1rem solid teal;
`;