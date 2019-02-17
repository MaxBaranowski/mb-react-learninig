import React from 'react'
import styled from "styled-components";

export default function Main(props) {
    const user = props.user;
    return (
        <MainSidebarWrapper>
            <header>
                <h1>
                    Info
                </h1>
            </header>
            <address>
                <h1>Name:</h1>
                <p>{user.name.first} {user.name.last}</p>
                <h1>Adress:</h1>
                <p>
                    {user.location.postcode + " " + user.location.street + ","}
                    {user.location.state + ", " + user.location.city}
                </p>
                <h1>Phone:</h1>
                <p>{user.cell}</p>
            </address>
        </MainSidebarWrapper>
    )
}

const MainSidebarWrapper = styled.main`
    padding: 0 10px;
    margin-bottom: 30px;

    header {
        h1 {
            padding: 10px 0;
            border-bottom: 2px solid #ccc;
            text-transform: uppercase;
        }
    }

    address {
        h1 {
            font-style: normal;
        }
        
        p {
            margin-bottom: 10px;
            text-transform: capitalize;
            word-break: break-word;
        }
    }
`;