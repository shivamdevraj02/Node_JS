const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const MONGO_URL ="mongodb+srv://shivamdevraj02:Devraj%401372@airbnb.emxj8xf.mongodb.net/?retryWrites=true&w=majority&appName=airbnb"

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => { 
      // console.log('Connected to MongoDB',client);
      callback();
      _db = client.db('airbnb');
     
      })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });

  };


  const getDB = () => {
    if (!_db) {
      throw new Error('Database not initialized. Call mongoConnect first.');
    }
    return _db;
  };

  module.exports = {
    mongoConnect,
    getDb: getDB
  };