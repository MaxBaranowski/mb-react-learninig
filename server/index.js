const express = require('express');
const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json({ limit: '5mb' }))
var iter = 0;
app.get('/', async function (req, res) {

    // var users = await getUsers(5000).then((result) => {
    //     if (result.hasOwnProperty("data") && typeof result.data === "object") {
    //         return result.data.results; // return array with objects
    //     } else {
    //         res.send("ERROR, randomuser.me returned data in invalid format");
    //         throw new Error("ERROR, randomuser.me returned data in invalid format");
    //     }
    // });
    // // console.log(users);
    // postUsersDetailed(users);
    res.send("done no request more")
    //res.send("<pre>" + JSON.stringify(users, null, 2))
});

function getUsers(amount) {//5000
    //returns promise
    return axios(`https://randomuser.me/api/?results=${amount}`);
}
mongodb://<dbuser>:<dbpassword>@ds125945.mlab.com:25945/mb-react-person-list

function postUsersDetailed(users) {
    MongoClient.connect(
        'mongodb://admin:YaOTg3Z7s8w9vr8YoJTn@ds125945.mlab.com:25945/mb-react-person-list',
        { useNewUrlParser: true },
        function (err, database) {
            if (err) throw err;
            var db = database.db('mb-react-person-list');
            db.collection('users-detailed')
                .insertMany(users)
            database.close();
            iter += 1;
            console.log(iter)
        }
    );
}

app.listen(process.env.PORT || 8080, () => {
    console.log('server starts')
});
