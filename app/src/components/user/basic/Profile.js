import React, { Component } from 'react'
// import ProfileDetailed from "../detailed/Profile";

export default class ProfileBasic extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };

    this.user = {
      full: props.user,
      name: props.person.name,
      images: props.person.picture,
      nationality: props.person.nat
    }
  }

  render() {
    return (
      <div className="person" onClick={this.props.handlerShowDetailUserInfo} >
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

