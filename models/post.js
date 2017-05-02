const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    published: { type: Boolean, required: true, default: false },
    _user: { type: Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Post', postSchema);
