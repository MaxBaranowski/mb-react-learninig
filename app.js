const express = require('express');
const axios = require('axios');
// const MongoClient = require('mongodb').MongoClient;
// const ObjectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser');
const app = express();

const user_controller = require("./controllers/userController");
//router.get('/', user_controller.index);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json({ limit: '5mb' }))

//make 5000 users from randomuser
app.get('/api/make-detailed-users', async function (req, res) {
  res.sendStatus(200);
  return;
  let users = await getUsers(2, res);
  //res.send("<pre>" + JSON.stringify(users, null, 2));
  //postUsersDetailed(users);

  async function getUsers(amount, res) {//5000
    //returns promise
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
});

//make 5000 users from mLab with name, nationality, images only
app.get('/api/make-basic-users', async function (req, res) {
  res.sendStatus(200);
  return;
  await MongoClient.connect(
    'mongodb://admin:YaOTg3Z7s8w9vr8YoJTn@ds125945.mlab.com:25945/mb-react-person-list',
    { useNewUrlParser: true },
    function (err, database) {
      if (err) throw err;
      var db = database.db('mb-react-person-list');
      db.collection('users-detailed')
        .find()
        .limit(0)
        .toArray().then((data) => {
          database.close();
          console.log(data.length);
          createCollection(data);
        })
    }
  );

  async function createCollection(data) {
    const basicInfoUsers = await data.map(user => ({
      id: user._id,
      name: user.name,
      nat: user.nat,
      images: user.picture
    }));

    await MongoClient.connect(
      'mongodb://admin:YaOTg3Z7s8w9vr8YoJTn@ds125945.mlab.com:25945/mb-react-person-list',
      { useNewUrlParser: true },
      function (err, database) {
        if (err) throw err;
        var db = database.db('mb-react-person-list');
        db.collection('users-basic')
          .insertMany(basicInfoUsers)
          .then((data) => {
            database.close();
            res.sendStatus(200);
          })
      }
    );
  }
});

//get users from mLab
app.get('/api/get-users/:amount', async function (req, res) {
  const db = require("./models/db/user");
  const ammount = (Number(req.params.amount) !== NaN && Number(req.params.amount) <= 1000 && Number(req.params.amount) > 0) ? Number(req.params.amount) : 100;

  await db.getUsers(ammount, function (data) { res.send({ result: data }); })
});

//get user detailed info from mLab
app.get('/api/get-user-detailed/:id', async function (req, res) {
  const db = require("./models/db/user");
  const id = (typeof req.params.id === "string" && !Number(req.params.id) && req.params.id.length === 24) ? req.params.id : false;
  if (!id) {
    res.send("ERROR, bad parametr!")
    return;
  }
  await db.getUser(id, function (data) { res.send({ result: data }); })

})

app.listen(process.env.PORT || 8080, () => {
  console.log('server starts')
});
