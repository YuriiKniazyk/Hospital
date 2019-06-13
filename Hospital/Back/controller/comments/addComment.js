const mongoose = require('mongoose');
const config = require('../config');
const commentModel = require('../../DataBase/commentSchema');

module.exports = async (req, res) => {
    try{     
        const { text,
        data,
        author,
        doctor} = req.body;

        const comment = {
            text,
            data ,
            author ,
            doctor                
        };
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {

            if (err) throw err;       
            var newComment = new commentModel({
                _id: new mongoose.Types.ObjectId(),
                text: comment.text,
                data: comment.data,
                author: comment.author,
                doctor: comment.doctor  
            });
            res.json(await commentModel.create(newComment));   
        });  
    } catch (e) {
        console.log(e);
    }
};