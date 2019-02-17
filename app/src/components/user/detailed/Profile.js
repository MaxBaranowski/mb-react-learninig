import React, { Component } from 'react'
import styled from "styled-components";
import { getDetailedUserInfo } from "../../../services/api/UserAPI"

import Loader from "../../home/Loader"
import Sidebar from "./components/Sidebar";
import Main from "./components/Main.js"

export default class ProfileDetailed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.match.params
    };
  }

  componentDidMount() {
    const { id } = this.state.user;
    // console.log(this.state.user)
    new Promise((resolve, reject) => {
      try {
        const result = getDetailedUserInfo(id);
        resolve(result)
      } catch (error) {
        reject(error.message)
      }
    }).then((response) => {
      console.log(response.result[0])
      this.setState({
        userDetailed: response.result[0]
      })

    }).catch((err) => {
      console.log(err);
      throw new Error("ERROR! Geting users data", err);
    });
  }

  render() {
    const { userDetailed = undefined } = this.state;
    if (userDetailed) {
      return (
        <DetailProfileWrapper>
          <Sidebar user={userDetailed} />
          <Main user={userDetailed} />
        </DetailProfileWrapper>
      )
    } else {
      return (
        <Loader />
      )
    }
  }
}

const DetailProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  grid-template-columns: 250px 1fr;
  box-sizing: border-box;
  min-height: 100vh;
  min-height: calc(100vh - 70px);
  word-break: break-all;

  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: auto 1fr auto;
}

`;

