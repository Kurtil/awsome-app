const mongoose = require('mongoose');

// Mongo url is mongo because the container name of the db is mongo, on the same network
const dbUrl = 'mongodb://mongo:27017/awsomeapp_db'

const connectToBd = () => mongoose.connect(dbUrl, /*{
  useNewUrlParser: true,
  autoReconnect: true ,
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 3000, // Reconnect every 500ms
  poolSize: 10,
}*/); // This options object must add an autoReconnect behaviour... but it doesn't work. TODO : make it work

module.exports = new Promise((resolve, reject) => {

  connectToBd();

  mongoose.connection.on('error', function (e) {
    console.log("db: mongodb error " + e);
    // connectToBd();
  });

  mongoose.connection.on('connected', function (e) {
    console.log('db: mongodb is connected: ' + dbUrl);
    resolve();
  });

  mongoose.connection.on('disconnecting', function () {
    console.log('db: mongodb is disconnecting!!!');
  });

  mongoose.connection.on('disconnected', function () {
    console.log('db: mongodb is disconnected!!!');
    setTimeout(connectToBd, 3000); // try to reconnect every 1000ms
    // TODO remove the line above when the option object with autoReconnect is fixed
  });

  mongoose.connection.on('reconnected', function () {
    console.log('db: mongodb is reconnected: ' + dbUrl);
  });

  mongoose.connection.on('timeout', function (e) {
    console.log("db: mongodb timeout " + e);
    // connectToBd();
  });

  mongoose.connection.on('close', function () {
    console.log('db: mongodb connection closed');
  });

  mongoose.Promise = global.Promise; // To enable promise use in mongoose
  // const db = mongoose.connection;
  // db.on('error', console.error.bind(console, 'MongoDB connection error:'));
});