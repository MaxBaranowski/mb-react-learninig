export const getBasicUserInfo = async (amount = 10, ...params) => {
  try {
    const response = await fetch(`https://randomuser.me/api/?inc=${params}&results=${amount}&format=json`);
    console.log(response)
    if (response.status !== 200) {
      throw new Error("Bad response from server: ", response.statusText);
    }
    return response.json();
  }
  catch (error) {
    throw new Error("ERROR! API: ", error);
  }
  // works the same, but without try catch
  // return fetch(`https://randomuser.me/api/?inc=${params}&results=${amount}&format=json`)
  //   .then(response => response.json())
}
