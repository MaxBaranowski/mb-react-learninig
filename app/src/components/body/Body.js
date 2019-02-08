import React, { Component } from 'react'
import styled from 'styled-components'
import { Profile as Person } from "../user/basic/Profile"

import { getBasicUserInfo } from "../../services/api/UserAPI"

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
      people: []
    };

    //this.showDetailedInfo = this.showDetailedInfo.bind(this);
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
    const { people } = this.state;
    let persons = [];
    // making one big component
    for (let [index, person] of people.entries()) {
      persons.push(<Person key={index} person={person} />)
    }

    if (people.length < 1) {
      return (
        <Main>
          <div className="wave-loader-wrapper">
            <img className="wave-loader" src="/images/wave.svg" alt="" />
          </div>
        </Main>
      )
    } else {
      return (
        <Main>
          {persons}
        </Main>
      )
    }
  }
}

const Main = styled.main`
  flex: 1;
`;
