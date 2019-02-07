import React from 'react'

export const Profile = (props) => {
  const user = {
    name: props.person.name,
    images: props.person.picture,
    nationality: props.person.nat
  };
  //const { additional: additionalKeys } = props;
  // console.log(user)

  return (
    <div className="person">
      <img src={user.images.thumbnail} alt={user.name.first + " " + user.name.last} />
      <div>
        <h4>{user.name.first.capitalizeFirstLetter() + " " + user.name.last.capitalizeFirstLetter()}</h4>
        <h4>{user.nationality}</h4>
        {/* <p>{additionalKeys}</p> */}
      </div>
    </div>
  )
}

