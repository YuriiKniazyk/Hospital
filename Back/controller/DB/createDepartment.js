const mongoose = require('mongoose');
const config = require('../config');
const departmentModel = require('../../DataBase/departmentSchema');

module.exports = async (req, res) => {
    try{ 
        const {name} = req.body;
        const department = {name};
        
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {
            if (err) throw err;       

            var newDepartment = new departmentModel({
                _id: new mongoose.Types.ObjectId(),
                name: department.name});
    
            await departmentModel.findOne({name: req.body.name})
            .exec(function(err, department) {
                if (!department) {
                    departmentModel.create(newDepartment);  
                } 
            });
        })
        res.status(200).json({succses: true});
    } 
        catch(e){console.log(e);
    }
    
};