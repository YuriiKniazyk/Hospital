const mongoose = require('mongoose');
const config = require('../config');
const departmentModel = require('../../DataBase/departmentSchema');

module.exports = async (req, res) => {
    try{
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {
            if (err) throw err;
                            
            await departmentModel.find({})
            .exec(function(err, departments) {
                if (err) throw err;
                if (!departments) {
                    departments = {Message: 'ERROR!!! Departments is not found!!!'};
                    res.json(departments);
                } else {
                    res.json(departments);
                }
            });
        })     
    } catch {
        console.log(e);
    }
};