import React, { Component } from 'react'
import { Profile as Person } from "../user/basic/Profile"

export default class Body extends Component {
  people = [
    {
      img: 22,
      name: "John",
      job: "Develoer"
    },
    {
      img: 34,
      name: "Mike",
      job: "Develoer"
    },
  ];

  render() {
    return (
      <section>
        Body Component
        <Person person={this.people[0]} />
        <Person person={this.people[1]} />
      </section>
    )

  }
}
