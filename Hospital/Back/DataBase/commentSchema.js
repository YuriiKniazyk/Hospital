const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctors'
    }

});

let commentModel = mongoose.model('Comment', commentSchema);

module.exports = commentModel;