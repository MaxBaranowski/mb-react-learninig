import React, { Component } from 'react';
import './styles/App.css';


const Person = (props) => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
      </div>
    </div>
  )
};

const PersonList = () => {
  const people = [
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

  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} />
    </section>
  )
};

const App = () => (
  <PersonList />
);

export default App;
