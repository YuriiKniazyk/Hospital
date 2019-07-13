const doctorModel = require('../../DataBase/doctorSchema');

module.exports = async (req, res) => {
    try{
        let curentUser = req.body.curentUser;
        
        if (curentUser.doctor == true && curentUser.id == req.params.id){
            res.json(await doctorModel.findByIdAndUpdate(req.params.id, req.body));
        } else {
            res.json('Sorry!!!You dont update this data');
        }
    } catch (e){
        console.log(e);
    }
};