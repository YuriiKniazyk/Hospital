const mongoose = require('mongoose');
const config = require('../config');
const doctorModel = require('../../DataBase/doctorSchema');

module.exports = async (req, res) => {
    try{
        const departmentId = req.params.id;
        
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {
            if (err) throw err;
                            
            await doctorModel.find({id_department:departmentId, doctor: true})
            .exec(function(err, users) {
                if (err) throw err;
                if (!users) {
                    users = [];
                    res.json(users);
                } else {
                    res.json(users);
                }
            });
        })     
    } catch (e){
        console.log(e);
    }
};