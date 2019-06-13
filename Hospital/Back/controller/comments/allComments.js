const commentModel = require('../../DataBase/commentSchema');

module.exports = async (req, res) => {
    try{     
        res.json(await commentModel.find({}));     
    } catch (e) {
        console.log(e);
    }
};