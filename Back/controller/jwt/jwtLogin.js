const jwt = require("jsonwebtoken");
const config = require('../config');
const mongoose = require('mongoose');
const doctorModel = require('../../DataBase/doctorSchema');

module.exports = async (req, res) => {
    const {login, password} = req.body;
    const userCreds = {login,password};
    
    try { 
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function () {
                        
            await doctorModel.findOne(
                {
                    login: userCreds.login,
                    password: userCreds.password
                }
            )
            .exec(function(err, user) {
                if (err) throw err;
                
                if (user) { 
                    let token = jwt.sign( {name: user.name, surname: user.surname, id: user._id, doctor: user.doctor}, config.jwtKey);
                    res.json({
                        token: token,
                        type: "Bearer"
                    });
                }
            });
        });
    } catch (e) {
        console.log(e);
        
    }
}
