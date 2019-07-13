const commentModel = require('../../DataBase/commentSchema');

module.exports = async (req, res) => {
    try{     
        res.json(await commentModel.findByIdAndRemove(req.params.id));     
    } catch (e) {
        console.log(e);
    }
};