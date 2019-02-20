import React from 'react'
import styled from "styled-components";
import Map from "./Map"

export default function Main(props) {
  const { user } = props;
  return (
    <DetailProfileMainWrapper>
      <h1>USER INFO DETAILED</h1>
      
            <pre>
            {
                JSON.stringify(user, null, 2)
            }
            </pre>
    </DetailProfileMainWrapper>
  )
}

const DetailProfileMainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
   
`;

// AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk
