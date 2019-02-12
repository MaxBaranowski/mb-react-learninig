import React, { Component } from 'react'
import styled from "styled-components";
import { getDetailedUserInfo } from "../../../services/api/UserAPI"
import Loader from "../../body/Loader"

export default class ProfileDetailed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
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
        // isLoaded: true,
        userDetailed: response.result[0]
      })

    }).catch((err) => {
      console.log(err)
      throw new Error("ERROR! Geting users data", err);
    });
  }

  render() {
    const { userDetailed = undefined } = this.state;
    if (userDetailed) {
      return (
        <DetailProfileWrapper onClick={this.props.showHidePersonDetailedView}>
          {userDetailed.name.first}
          {userDetailed.name.last}
          {userDetailed.gender}
          {userDetailed.login.username}
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
  flex: 1;
  background: aliceblue;
  min-height: calc(100vh - 70px);
`;
