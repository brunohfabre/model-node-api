const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost/blog_teste');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', router);

module.exports = app;
