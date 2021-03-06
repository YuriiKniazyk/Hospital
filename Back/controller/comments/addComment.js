const mongoose = require('mongoose');
const config = require('../config');
const commentModel = require('../../DataBase/commentSchema');

module.exports = async (req, res) => {
    try{     
        const { 
        text,
        data,
        author,
        doctor,
        replyCommentId} = req.body;

        const comment = {
            text,
            data ,
            author ,
            doctor,
            replyCommentId                
        };
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {

            if (err) throw err;       
            var newComment = new commentModel({
                _id: new mongoose.Types.ObjectId(),
                text: comment.text,
                data: comment.data,
                author: comment.author,
                doctor: comment.doctor,
                replyCommentId: comment.replyCommentId  
            });
            res.json(await commentModel.create(newComment));   
        });  
    } catch (e) {
        console.log(e);
    }
};