const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://nitinahuja240:good1234@shop.i4igw4d.mongodb.net/"
  )
    .then((client) => {
      console.log("connected");
      _db = client.db();
      callback();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database Found!";
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
