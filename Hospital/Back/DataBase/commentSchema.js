const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: {
        type: String
    },
    data: {
        type: String 
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctors'
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctors'
    },
    replyCommentId: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
        required: false
    }

});

let commentModel = mongoose.model('Comment', commentSchema);

module.exports = commentModel;