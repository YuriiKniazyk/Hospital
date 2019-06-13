const mongoose = require('mongoose');
const config = require('../config');
const doctorModel = require('../../DataBase/doctorSchema');

module.exports = async (req, res) => {
    try{
        const doctorId = req.params.id;
        
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {
            if (err) throw err;
                            
            await doctorModel.findById(doctorId)
            .exec(function(err, doctor) {
                if (err) throw err;
                if (!doctor) {
                    doctor = {Message: 'ERROR!!! User is not found!!!'};
                    res.json(doctor);
                } else {
                    res.json(doctor);
                }
            });
        })     
    } catch{
        console.log(e);
    }
};