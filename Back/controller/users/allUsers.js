const mongoose = require('mongoose');
const config = require('../config');
const doctorModel = require('../../DataBase/doctorSchema');

module.exports = async (req, res) => {
    try{
        const {name} = req.query;

        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {
             
            await doctorModel.find({name: new RegExp(name, 'i')})
            .exec(function(err, user) {
                if (err) throw err;
                if (!user.length) {
                    user = [];
                    res.json(user);
                } else {
                    res.json(user);
                }
            });
        })     
    } catch (e) {
        console.log(e);
    }
};