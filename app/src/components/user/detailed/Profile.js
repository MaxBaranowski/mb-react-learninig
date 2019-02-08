import React, { Component } from 'react'
import styled from "styled-components";

export default class ProfileDetailed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  render() {
    const { user } = this.state;
    console.log(user)
    return (
      <DetailProfileWrapper onClick={this.props.handlerShowDetailUserInfo}>
        {/* {user.name.first} */}
      </DetailProfileWrapper>
    )
  }
}

const DetailProfileWrapper = styled.section`
  display: flex;
  flex: 1;
  background: aliceblue;
  min-height: calc(100vh - 70px);
`;