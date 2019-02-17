import React from 'react'
import styled from "styled-components";

export default function Main(props) {
    const { user } = props;
    return (
        <DetailProfileMainWrapper>
            <h1>USER INFO DETAILED</h1>
                {
                    JSON.stringify(user, null, 2)
                }
        </DetailProfileMainWrapper>
    )
}

const DetailProfileMainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    // grid-column: 4/-1;
    
`;
