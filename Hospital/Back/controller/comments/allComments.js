const commentModel = require('../../DataBase/commentSchema');

module.exports = async (req, res) => {
    try{     
        let id = req.params.id
         
        res.json(await commentModel.find({doctor: id}));     
    } catch (e) {
        console.log(e);
    }
};