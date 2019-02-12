const db = require("../models/db/user");
const axios = require('axios');

/**
|--------------------------------------------------
| Get users from DB, amount of users in 1 - 1000 
|--------------------------------------------------
*/
exports.get_users = async (req, res) => {
  let amount = req.params.amount;

  if (!amount || amount.match(/^[0-9]+$/) == null) { // only numbers
    res.status(400).type('html').send("Bad Request<br> Invalid parametr was sent.");
    return;
  }

  amount = Number(amount);
  await db.getUsers(amount, data => {
    res.status(200).send({ result: data });
    return;
  })
};
/**
|--------------------------------------------------
| Get user detailed info from DB
|--------------------------------------------------
*/
exports.get_user = async (req, res) => {
  const id = (typeof req.params.id === "string" && !Number(req.params.id) && req.params.id.length === 24) ? req.params.id : false;
  if (!id) {
    res.status(500).send("ERROR, bad parametr!")
    return;
  }
  await db.getUser(id, function (data) { res.send({ result: data }); })
};
/**
|--------------------------------------------------
| Create DB with 5000 users
|--------------------------------------------------
*/
exports.make_users_detailed = async (req, res) => {
  res.send("ERROR, Creating DB with users can be used only once.");
  return;

  let users = await getUsers(5000, res);
  db.createUsersDetailedCollection(users);

  async function getUsers(amount, res) {
    return await axios(`https://randomuser.me/api/?results=${amount}`)
      .then((result) => {
        if (result.hasOwnProperty("data") && typeof result.data === "object") {
          return result.data.results; // return array with objects
        } else {
          res.send("ERROR, randomuser.me returned data in invalid format");
          throw new Error("ERROR, randomuser.me returned data in invalid format");
        }
      });
  }
};
/**
|--------------------------------------------------
| Create DB with [name, nationality, images] of existing users
|--------------------------------------------------
*/
exports.make_users_basic = async (req, res) => {
  res.send("ERROR, Creating DB with users can be used only once.");
  return;

  db.getUsers(0, createCollection);
  async function createCollection(data) {
    // console.log(data[0])
    const basicInfoUsers = await data.map(user => ({
      id: user._id,
      name: user.name,
      nat: user.nat,
      images: user.images
    }));
    db.createUsersBasicCollection(basicInfoUsers);
  }
};