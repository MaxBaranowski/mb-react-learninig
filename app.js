const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const user_controller = require('./controllers/userController');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '5mb' }))
app.use('/static', express.static('public'));
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/" + "index.html");
});

app.get('/api/get-users/:amount', user_controller.get_users);
app.get('/api/get-user/:id', user_controller.get_user);

app.get('/api/make-basic-users', user_controller.make_users_basic);
app.get('/api/make-detailed-users', user_controller.make_users_detailed);

app.get('/*', function (req, res) {
  res.status(404)
    .sendFile(__dirname + "/public/" + "404.html");
})

app.listen(process.env.PORT || 8080, () => {
  console.log('server starts')
});
