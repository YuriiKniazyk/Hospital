const doctorModel = require('../../DataBase/doctorSchema');

module.exports = async (req, res) => {
    try{
        let doctor = await doctorModel.findById(req.params.id)
        let rating = +req.body.rating;
        let newRating = (doctor.rating + rating)/2;
        
        await doctorModel.findByIdAndUpdate(req.params.id, {rating: newRating})

        res.json({rating: newRating});
    } catch (e){
        console.log(e);
    }
};