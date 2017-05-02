const express = require('express');
const userController = require('./controllers/userController');
const postController = require('./controllers/postController');

const router = express.Router();

router.get('/users', userController.get);
router.post('/users', userController.post);
router.put('/users/:id', userController.put);
router.delete('/users/:id', userController.delete);

router.get('/posts', postController.get);
router.post('/posts', postController.post);
router.put('/posts/:id', postController.put);
router.delete('/posts/:id', postController.delete);

module.exports = router;
