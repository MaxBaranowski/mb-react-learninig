import React, { Component } from 'react'
import styled from 'styled-components'
import ProfileBasic from "../user/basic/Profile"
import ProfileDetailed from "../user/detailed/Profile";

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
        people: response.results
      })
      // console.log(people)
    }).catch((err) => {
      console.log(err)
      throw new Error("ERROR! Geting users data", err);
    });
  }

  render() {
    const { isDetailUserInfoShown, people, currentUser } = this.state;

    if (isDetailUserInfoShown) {
      return (
        <ProfileDetailed user={currentUser} showHidePersonDetailedView={() => this.showDetailUserInfo()} />
      )
    } else {
      let persons = [];
      // making one big component
      for (let [index, person] of people.entries()) {
        persons.push(<ProfileBasic key={index} person={person} showHidePersonDetailedView={() => this.showDetailUserInfo(person)} />)
      }

      if (people.length < 1) {
        return (
          <BodyWrapper>
            <div className="wave-loader-wrapper">
              <img className="wave-loader" src="/images/wave.svg" alt="" />
            </div>
          </BodyWrapper>
        )
      } else {
        return (
          <BodyWrapper>
            {persons}
          </BodyWrapper>
        )
      }

    }
  }
}

const BodyWrapper = styled.main`
  flex: 1;
`;
