import React from 'react'
import styled from "styled-components";
import Location from "./Location"
import MapContainer from "./GoogleMap"

export default function Main(props) {
  const { user } = props;
  return (
    <DetailProfileMainWrapper>
      <h1>USER INFO DETAILED</h1>
      {/* 
            <pre>
            {
                JSON.stringify(user, null, 2)
            }
            </pre> */}
      <MapContainer />
      <Location />
    </DetailProfileMainWrapper>
  )
}

const DetailProfileMainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
   
`;
