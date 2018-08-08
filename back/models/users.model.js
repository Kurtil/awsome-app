const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    id: ObjectId,
    firstName: String,
    lastName: String,
    inscriptionDate: Date
  });

  const UserModel = mongoose.model('User', User);

  module.exports = UserModel;