const commentModel = require('../../DataBase/commentSchema');

module.exports = async (req, res) => {
    try{     
        res.json(await commentModel.findByIdAndUpdate(req.params.id, req.body));     
    } catch (e) {
        console.log(e);
    }
};