import React, { Component } from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import Avatar from "./components/Avatar";
import UserInformation from "./components/UserInformation";

export default class ProfileBasic extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };

    this.user = {
      id: props.person.id,
      full: props.user,
      name: props.person.name,
      images: props.person.images,
      nationality: props.person.nat
    }
  }

  render() {
    return (
      <Link to={process.env.PUBLIC_URL + "/user/" + this.user.id} className="nav-link-unset">
        <UserWrapper >
          <Avatar src={this.user.images.thumbnail} alt={this.user.name.first + " " + this.user.name.last} />
          <UserInformation user={this.user.name} nationality={this.user.nationality} />
        </UserWrapper>
      </Link>
    )
  }
}

const UserWrapper = styled.div`
  background: #eeeeee;
  width: 17rem;
  padding: 1rem;
  margin: 2rem auto;
  transition: all 0.3s linear;
  border-radius: 0.3rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
  }
`;
