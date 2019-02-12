import React, { Component } from 'react'
import styled from 'styled-components'
import ProfileBasic from "../user/basic/Profile"
import ProfileDetailed from "../user/detailed/Profile";
import Loader from "./Loader"

import { getBasicUserInfo } from "../../services/api/UserAPI"

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailUserInfoShown: false,
      people: [],
      currentUser: {}
    };

    this.handlerShowHideDetailUserInfo = this.showDetailUserInfo.bind(this);
  }

  showDetailUserInfo(user = this.state.currentUser) {
    this.setState({
      // isLoaded: true,
      isDetailUserInfoShown: !this.state.isDetailUserInfoShown,
      currentUser: user
    })
  }

  componentDidMount() {
    new Promise((resolve, reject) => {
      try {
        const result = getBasicUserInfo(undefined, "name", "picture", "nat");
        resolve(result)
      } catch (error) {
        reject(error.message)
      }
    }).then((response) => {
      this.setState({
        // isLoaded: true,
        people: response.result
      })
      // console.log(people)
    }).catch((err) => {
      console.log(err)
      throw new Error("ERROR! Geting users data", err);
    });
  }

  showUsersWithBasicInfo(people) {
    let persons = [];
    // making one big component
    // eslint-disable-next-line
    for (let [index, person] of people.entries()) {
      // console.log(person)
      persons.push(<ProfileBasic key={person.id} person={person} showHidePersonDetailedView={() => this.showDetailUserInfo(person)} />)
    }

    // if no users - ajax request with getting date hasn`t yet been completed => show loader
    if (people.length < 1) {
      return (
        <Loader />
      )
      // show users
    } else {
      return (
        <BodyWrapper>
          {persons}
        </BodyWrapper>
      )
    }
  }

  showChosenUserDetailedInfo(currentUser) {
    return (
      <ProfileDetailed user={currentUser} showHidePersonDetailedView={() => this.showDetailUserInfo()} />
    )
  }

  render() {
    const { isDetailUserInfoShown, people, currentUser } = this.state;
    // show detail user info component
    if (isDetailUserInfoShown) {
      return this.showChosenUserDetailedInfo(currentUser);
    } else {
      return this.showUsersWithBasicInfo(people);
    }
  }
}

const BodyWrapper = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
