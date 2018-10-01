var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.route');

var app = express();

// Mongo url is mongo because the container name of the db is mongo, on the same network
const dbUrl = 'mongodb://mongo:27017/awsomeapp_db'
const connectToBd = () => mongoose.connect(dbUrl, /*{
  useNewUrlParser: true,
  autoReconnect: true ,
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 3000, // Reconnect every 500ms
  poolSize: 10,
}*/); // This options object must add an autoReconnect behaviour... but it doesn't work. TODO : make it work
connectToBd();

mongoose.connection.on('error', function (e) {
  console.log("db: mongodb error " + e);
  // connectToBd();
});

mongoose.connection.on('connected', function (e) {
  console.log('db: mongodb is connected: ' + dbUrl);
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

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
