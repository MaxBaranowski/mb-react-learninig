import React from 'react'
import styled from "styled-components";
import sidebar_style from "../styles.css";

import Avatar from "../../basic/components/Avatar";
import Country from "../../basic/components/Country"

export default function Sidebar(props) {

    const { user } = props;

    return (
        <DetailProfileSideBarWrapper>
            <Avatar className={sidebar_style.avatar} src={user.picture.large} alt={user.name.first + " " + user.name.last} />
            <Country className={sidebar_style.flag} src={user.nat} alt={user.nat} />
            <main>
                Info<br />
                Name:<br />
                <h1>{user.name.first.capitalizeFirstLetter()} {user.name.last.capitalizeFirstLetter()}</h1>
                Adress: <br />
                <h1>
                    {user.location.street.capitalizeFirstLetter()}
                    <br />
                    {user.location.city.capitalizeFirstLetter()}
                </h1>
                {/* 
                My email address is
                My birthday is
                My address is + [google map]
                My phone number is          
                */}
                {user.login.username}
            </main>
        </DetailProfileSideBarWrapper>
    )
}

const DetailProfileSideBarWrapper = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    min-height: calc(100vh - 70px);
    position: relative;
    filter: drop-shadow(2px 1px 9px #868686);

    @media (max-width: 768px) {
        min-height: 300px;
    }
`;


