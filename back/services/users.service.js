const mongoose = require('mongoose');
const UserModel = require('../models/users.model')

// Mongo url is mongo because the container name of the db is mongo, on the same network
mongoose.connect('mongodb://mongo/awsomeapp_db');

module.exports = {
    getAllUsers() {
        let usersToReturn = null;
        UserModel.find({}, function (err, users) {
            if (!err) {
                usersToReturn = users;
            }
        });
        return usersToReturn;
    },

    addUser(user) {
        const userInstance = new UserModel();
        instance.firstName = user.firstName;
        instance.lastName = user.lastName;
        instance.inscriptionDate = user.inscriptionDate;
        instance.save(function (err) {
            // TODO hangle err and success to inform the front end
        });
    }
}