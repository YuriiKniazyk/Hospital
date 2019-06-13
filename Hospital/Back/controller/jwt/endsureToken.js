const jwt = require("jsonwebtoken");
const config = require('../config');

module.exports = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== 'undefined') {

        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];

        jwt.verify(bearerToken, config.jwtKey, function(err, data) {
            if (err){
                res.sendStatus(403);    
            } else {
                req.body.curentUser = data; 
                next();
            }
        })
    } else {
        res.sendStatus(403);
    }
}