import React from "react";
import styled from "styled-components";

export default function Avatar(props) {
  return (
    <figure className={props.className}>
      <AvatarImage src={props.src} alt={props.alt} />
    </figure>
  )
}

const AvatarImage = styled.img`
  border-radius: 50%;
  border: 0.1rem solid teal;
`;