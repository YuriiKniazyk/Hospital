const mongoose = require('mongoose');
const config = require('../config');
const doctorModel = require('../../DataBase/doctorSchema');

module.exports = async (req, res) => {
    try{ 
        const {doctor,
            id_department,
            name, 
            surname, 
            login,
            password,
            experiens,
            description,
            phone,
            email,
            floor,
            office,
            deyOfwork} = req.body;

        const user = {
            doctor,
            id_department,
            name, 
            surname, 
            login,
            password,
            experiens,
            description,
            phone,
            email,
            floor,
            office,
            deyOfwork             
        };
        
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {

            if (err) throw err;       
            var newUser = new doctorModel({
                _id: new mongoose.Types.ObjectId(),
                id_department: user.id_department,
                doctor: user.doctor,
                name: user.name,
                surname: user.surname,
                login: user.login,
                password: user.password,
                experiens: user.experiens,
                description: user.description,
                phone: user.phone,
                email: user.email,
                floor: user.floor,
                office: user.office,
                deyOfwork: user.deyOfwork   
            });
    
            await doctorModel.findOne({login: req.body.login, password: req.body.password})
            .exec(function(err, user) {
                if (!user) {
                    doctorModel.create(newUser);  
                } 
            });
        })
        res.status(200).json({succses: true});
    } 
        catch(e){console.log(e);
    }
    
};