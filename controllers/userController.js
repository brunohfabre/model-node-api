const User = require('../models/user');

const userController = {};

userController.get = function(req, res) {
    User.find({}).then(function(users) {
        res.send(users);
    });
};

userController.post = function(req, res) {
    User.create(req.body).then(function(user) {
        res.send(user);
    }).catch(function(err) {
        res.send(err);
    });
};

userController.put = function(req, res) {
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(user) {
        User.findOne({_id: req.params.id}).then(function(user) {
            res.send(user);
        });
    }).catch(function(err) {
        res.send(err);
    });
};

userController.delete = function(req, res) {
    User.findByIdAndRemove({_id: req.params.id}).then(function(user) {
        res.send(user);
    }).catch(function(err) {
        res.send(err);
    });
};

module.exports = userController;
