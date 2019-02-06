import React, { Component } from 'react'

export default class UserAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=500`)
      .then(
        response => {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        }).then(response => {
          this.setState({
            isLoaded: true,
            data: response.results
          })
        },
          (error) => {
            this.setState({
              isLoaded: true,
              error: error
            });
          }
        )
  }

  render() {
    const a = "dupa";
    const { error, isLoaded, data } = this.state;
    console.log(this.state)
    console.log(error, isLoaded, data)
    return (
      <div>
        data: {data.length}
      </div>
    )
  }
}
