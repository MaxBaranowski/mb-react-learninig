import React, { Component } from 'react'
import ProfileDetailed from "../detailed/Profile";

export class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayDetailedInfo: false
    };

    this.user = {
      full: props.user,
      name: props.person.name,
      images: props.person.picture,
      nationality: props.person.nat
    }

    this.displayDetailedInfo = this.displayDetailedInfo.bind(this);
  }

  displayDetailedInfo() {
    this.setState({
      // isLoaded: true,
      displayDetailedInfo: !this.state.displayDetailedInfo
    })
  }

  render() {
    const { displayDetailedInfo } = this.state;
    if (displayDetailedInfo) {
      return (
        <ProfileDetailed user={this.user} closeDisplayDetailedInfo={this.displayDetailedInfo} />
      )
    } else {
      return (
        <div className="person" onClick={this.displayDetailedInfo} >
          <img src={this.user.images.thumbnail} alt={this.user.name.first + " " + this.user.name.last} />
          <div>
            <h4>{this.user.name.first.capitalizeFirstLetter() + " " + this.user.name.last.capitalizeFirstLetter()}</h4>
            <h4>{this.user.nationality}</h4>
            {/* <p>{additionalKeys}</p> */}
          </div>
        </div>
      )
    }
  }
}

