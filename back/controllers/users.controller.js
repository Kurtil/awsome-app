const UserModel = require('../models/users.model')

module.exports.user_create = async (req, res, next) => {
    if (!req.body.firstName || !req.body.lastName) {
        return res.status(400).json({ "error": "FirstName and lastName are mandatories!" });
    }

    let user = new UserModel(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            inscriptionDate: req.body.inscriptionDate
        }
    );

    let savedUser;
    try {
        savedUser = await user.save();
    } catch (err) {
        return next(err);
    }

    res.status(200).json({
        "success": 'User created successfully!',
        "id": savedUser._id
 });

};

module.exports.user_read = async (req, res, next) => {
    let user;
    try {
        user = await UserModel.findById(req.params.id);
    } catch (err) {
        return next(err);
    }

    res.status(201).json(user);
}

module.exports.user_readall = async (req, res, next) => {
    let users;
    try {
        users = await UserModel.find();
    } catch (err) {
        return next(err)
    }

    res.send(users);
}

module.exports.user_update = async (req, res, next) => {
    let updateObject = {};
    if (req.body.firstName) updateObject.firstName = req.body.firstName;
    if (req.body.lastName) updateObject.lastName = req.body.lastName;
    if (req.body.inscriptionDate) updateObject.inscriptionDate = req.body.inscriptionDate;

    let user;
    try {
        user = await UserModel.findByIdAndUpdate(req.params.id, { $set: updateObject });
    } catch(err) {
        return res.next(err);
    }

    res.status(200).json({"success" : `User with id ${user._id} udpated successfully!`});
}

module.exports.user_delete = async (req, res, next) => {
    let deletedUser;
    try {
        deletedUser = await UserModel.findByIdAndRemove(req.params.id);
    } catch (err) {
        return next(err);
    }

    res.status(200).json({ "success": `user with firstname ${deletedUser.firstName} and lastname ${deletedUser.lastName} delete successfully!` });
}
