const Post = require('../models/post');

const postController = {};

postController.get = function(req, res) {
    Post.find({}).populate({
        path: '_user'
    }).then(function(posts) {
        res.send(posts);
    });
};

postController.post = function(req, res) {
    Post.create(req.body).then(function(post) {
        res.send(post);
    }).catch(function(err) {
        res.send(err);
    });
};

postController.put = function(req, res) {
    Post.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(post) {
        Post.findOne({_id: req.params.id}).then(function(post) {
            res.send(post);
        });
    }).catch(function(err) {
        res.send(err);
    });
};

postController.delete = function(req, res) {
    Post.findByIdAndRemove({_id: req.params.id}).then(function(post) {
        res.send(post);
    }).catch(function(err) {
        res.send(err);
    });
};

module.exports = postController;
