export const getBasicUserInfo = async (amount = 100, ...params) => {
  try {
    const response = await fetch(`https://randomuser.me/api/?inc=${params}&results=${amount}&format=json`);
    if (response.status !== 200) {
      throw new Error("Bad response from server: ", `params: ${params} ${amount}`, " Response: ", response);
    }
    const data = await response.json();
    // ?????????
    return data;
  }
  catch (error) {
    throw new Error("ERROR! API: ", error);
  }
}
