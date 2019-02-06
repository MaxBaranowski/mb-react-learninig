import React, { Component } from 'react'
import styled from 'styled-components'
import { Profile as Person } from "../user/basic/Profile"

import UserApi from "../../services/api/UserAPI"

export default class Body extends Component {
  people = [
    {
      img: 22,
      name: "John",
      job: "Developer"
    },
    {
      img: 34,
      name: "Mike",
      job: "Developer"
    },
  ];

  render() {
    return (
      <Main>
        <Person person={this.people[0]} />
        <Person person={this.people[1]} />
        <UserApi />
      </Main>
    )
  }
}

const Main = styled.main`
  flex: 1;
`;
