import React from "react";
import Country from "./Country";
import styled from "styled-components";

export default function UserInformation(props) {
  return (
    <UserInformationtext>
      <h4>{props.user.first.capitalizeFirstLetter() + " " + props.user.last.capitalizeFirstLetter()}</h4>
      <Country src={props.nationality} alt={props.nationality} />
    </UserInformationtext>
  )
}

const UserInformationtext = styled.div`
  position: relative;
  
  h4 {
      text-transform: capitalize;
      margin: 0.5rem 0;
      letter-spacing: 0.15rem;
      color: teal;
    }
`;