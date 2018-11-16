const UserModel = require('../models/users.model');

module.exports = {
    user_create: async (req, res, next) => {
        const { body: { firstName, lastName, inscriptionDate } } = req;
        if (!firstName || !lastName) {
            return res.status(400).json({ "error": "FirstName and lastName are mandatories!" });
        }
        const user = new UserModel({ firstName, lastName, inscriptionDate });
        let savedUser;
        try {
            savedUser = await createUser(user);
        } catch (err) {
            next(err);
        }

        res.status(200).json({
            "success": 'User created successfully!',
            "id": savedUser._id
        });
    },

    user_read: async (req, res, next) => {
        let user;
        try {
            user = await UserModel.findById(req.params.id);
        } catch (err) {
            return next(err);
        }
        res.status(201).json(user);
    },

    user_readall: async (req, res, next) => {
        let users;
        try {
            users = await UserModel.find();
        } catch (err) {
            return next(err)
        }
        res.send(users);
    },

    user_update: async (req, res, next) => {
        let user;
        try {
            user = await UserModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        } catch (err) {
            return res.next(err);
        }
        res.status(200).json({ "success": `User with id ${user._id} udpated successfully!` });
    },

    user_delete: async (req, res, next) => {
        let deletedUser;
        try {
            deletedUser = await UserModel.findByIdAndRemove(req.params.id);
        } catch (err) {
            return next(err);
        }
        res.status(200).json({ "success": `user with firstname ${deletedUser.firstName} and lastname ${deletedUser.lastName} delete successfully!` });
    },

    user_register: async (req, res, next) => {
        const { body: { firstName, lastName, password, login } } = req;
        if (!firstName || !lastName || !password || !login) {
            return res.status(400).json({ "error": "firstName, lastName, login and password are mandatories!" });
        }
        const inscriptionDate = new Date();
        const user = new UserModel({ firstName, lastName, inscriptionDate, password, login });

        try {
            await createUser(user);
        } catch (err) {
            next(err);
        }
        res.status(200).json({
            "success": 'You registered successfully!',
        });
    },

    user_login: async (req, res, next) => {
        const { body: { login, password } } = req;
        if (!password || !login) {
            res.status(400).json({ "error": "please enter login and password" });
        }
        let user;
        try {
            user = await UserModel.findOne({ login });
        } catch (err) {
            next(err);
        }

        if (user.password === password) {
            res.status(200).json({
                "success": 'You are the good one ;)!',
            });
        } else {
            res.status(401).send();
        }
    }
};

/**
 * @param {UserModel} user
 * @returns {Promise<UserModel>} the user effectively saved
 */
async function createUser(user) {
    try {
        return await user.save();
    } catch (err) {
        throw Error(err);
    }
}