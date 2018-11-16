const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    id: ObjectId,
    firstName: String,
    lastName: String,
    inscriptionDate: Date,
    login: String,
    password: String
  });

  const UserModel = mongoose.model('User', User);

  module.exports = UserModel;