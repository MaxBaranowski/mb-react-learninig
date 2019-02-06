import React from 'react'

export const Profile = (props) => {
  const { img, name, job } = props.person;
  const { additional: additionalKeys } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <p>{additionalKeys}</p>
      </div>
    </div>
  )
}

