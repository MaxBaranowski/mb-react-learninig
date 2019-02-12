const db = require("../db");

exports.getUser = function (id, cb) {
  db.MongoClient.connect(
    db.DB_URI,
    { useNewUrlParser: true },
    (err, connection) => {
      if (err) {
        res.send("ERROR: ", err);
        throw err;
      }

      let database = connection.db(db.DB_DATABASE_NAME);
      database
        .collection(db.DB_COLLECTION_DETAILED)
        .find({
          "_id": db.ObjectId(id)
        })
        .toArray()
        .then((data) => {
          connection.close();
          cb(data);
        });
    }
  );
};

exports.getUsers = function (amount, cb) {
  db.MongoClient.connect(
    db.DB_URI,
    { useNewUrlParser: true },
    (err, connection) => {
      if (err) {
        res.send("ERROR: ", err);
        throw err;
      }

      let database = connection.db(db.DB_DATABASE_NAME);
      database
        .collection(db.DB_COLLECTION_NAME_BASIC)
        .find()
        .limit(amount)
        .toArray()
        .then((data) => {
          connection.close();
          cb(data);
        });
    }
  );
};

exports.createUsersDetailedCollection = function (users, cb) {
  db.MongoClient.connect(
    db.DB_URI,
    { useNewUrlParser: true },
    (err, connection) => {
      if (err) {
        res.send("ERROR: ", err);
        throw err;
      }

      let database = connection.db(db.DB_DATABASE_NAME);
      database
        .collection(db.DB_COLLECTION_DETAILED)
        .insertMany(users)
        .then((data) => {
          connection.close();
          cb(data);
        });
    }
  );
};

exports.createUsersBasicCollection = function (users, cb) {
  db.MongoClient.connect(
    db.DB_URI,
    { useNewUrlParser: true },
    (err, connection) => {
      if (err) {
        res.send("ERROR: ", err);
        throw err;
      }

      let database = connection.db(db.DB_DATABASE_NAME);
      database
        .collection(db.DB_COLLECTION_NAME_BASIC)
        .insertMany(users)
        .then((data) => {
          connection.close();
          cb(data);
        });
    }
  );
}