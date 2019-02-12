export const getBasicUserInfo = async (amount = 100, ...params) => {
  try {
    // old randomuser 
    // const response = await fetch(`https://randomuser.me/api/?inc=${params}&results=${amount}&format=json`);
    //mLab DB
    const response = await fetch(`https://mb-react-person-list.herokuapp.com/api/get-users/${amount}`);

    if (response.status !== 200) {
      throw new Error("Bad response from server: ", response.statusText);
    }
    // console.log(response.json())
    return response.json();

  }
  catch (error) {
    throw new Error("ERROR! API: ", error);
  }
  // works the same, but without try catch
  // return fetch(`https://randomuser.me/api/?inc=${params}&results=${amount}&format=json`)
  //   .then(response => response.json())
}

export const getDetailedUserInfo = async (userId) => {
  try {
    const response = await fetch(`https://mb-react-person-list.herokuapp.com/api/get-user/${userId}`);
    if (response.status !== 200) {
      throw new Error("Bad response from server: ", response.statusText);
    }
    return response.json();
  } catch (error) {
    throw new Error("ERROR! API: ", error);
  }
}

export const getCountryFlag = (countryName) => {
  return `https://www.countryflags.io/${countryName}/flat/64.png`;
}