const UserModel = require('../models/users.model')

module.exports.user_create = function (req, res, next) {
    let user = new UserModel(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            inscriptionDate: req.body.inscriptionDate
        }
    );

    user.save(function (err, createdUser) {
        if (err) {
            return next(err);
        }
        res.send(`User created successfully with id : ${createdUser._id}`);
    });
};

module.exports.user_read = function (req, res, next) {
    UserModel.findById(req.params.id, function (err, user) {
        if (err) {
            return next(err);
        } else if (!user) {
            res.statusMessage = "This user does not exist!";
            res.status(400).end();
        } else {
            res.send(user);
        }
    })
}

module.exports.user_readall = function (req, res, next) {
    UserModel.find(function (err, users) {
        if (err) {
            return next(err);
        }
        res.send(users);
    })
}

module.exports.user_update = function (req, res, next) {
    let updateObject = {};
    if (req.body.firstName) updateObject.firstName = req.body.firstName;
    if (req.body.lastName) updateObject.lastName = req.body.lastName;
    if (req.body.inscriptionDate) updateObject.inscriptionDate = req.body.inscriptionDate;

    UserModel.findByIdAndUpdate(req.params.id, {$set: updateObject}, function (err, updatedUser) {
        if (err) {
            return next(err);
        } else if (!updatedUser) {
            res.statusMessage = "This user does not exist!";
            res.status(400).end();
        } else {
            res.send(`User with id ${updatedUser._id} udpated successfully!`);
        }
    });
}

module.exports.user_delete = function (req, res, next) {
    UserModel.findByIdAndRemove(req.params.id, function (err, doc) {
        if (err) {
            return next(err);
        } else if (!doc) {
            res.statusMessage = "This user does not exist!";
            res.status(400).end();
        } else {
            res.send(`User successfully deleted!`);
        }
    });
}
