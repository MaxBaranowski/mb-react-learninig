import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//PROPS properties

function sayName(name) {
  console.log(name);
}


function People(params) {
  const names = ['Jake', 'Jon', 'Thruster'];
  const createdCOmponent = names.map(function (name, index) {
    return <Person key={index} name={name} job={"Seller"} >sffsdfsdf</Person>
  })

  return (
    <section>
      {createdCOmponent}
    </section>
  )
};

const Person = (props) => {
  const { children, name, job } = props;

  return (
    <div >
      <h1>{name}</h1>
      <p>{job || "Developer"}</p>
      <h3>{children}</h3>
      <hr />
    </div >
  )
};


ReactDOM.render(
  <People />,
  document.getElementById('root')
);