import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//stateless Component
const Greeting = () => {
  return <h1>Hello from React</h1>
}

//statefull Component
class Greeting2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.iter = 0;
    console.log("constructor" + this.iter)
  }

  componentWillMount() {
    this.iter = 2;
    console.log("componentWillMount" + this.iter)
  }

  render() {
    // this.iter = 3;
    console.log("render" + this.iter)
    return (
      <React.Fragment>
        <Greeting />
        <h1>Hello from React2 -- {this.iter}</h1>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </React.Fragment>
    )
  }

  componentDidMount() {
    this.iter = 4;
    console.log("componentDidMount" + this.iter)
  }
}



ReactDOM.render(
  <Greeting2 />,
  document.getElementById('root')
);