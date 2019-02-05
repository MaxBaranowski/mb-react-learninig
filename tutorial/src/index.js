import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//js in jsx
function Person(params) {

  const btn = "search button";
  const name = "john";
  const lastName = "doe";

  return <section>
    <button>{btn}</button>
    <h2>{`${name} ${lastName}`}</h2>
    <p>{lastName}</p>
  </section>;
}

ReactDOM.render(
  <Person />,
  document.getElementById('root')
);