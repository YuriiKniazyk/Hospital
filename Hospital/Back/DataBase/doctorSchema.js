const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let doctorSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id_department: mongoose.Schema.Types.ObjectId,
    doctor: Boolean,
    name: String,
    surname: String,
    login: String,
    password: String,
    experiens: Number,
    description: String,
    phone: String,
    email: String,
    floor: Number,
    office: Number,
    deyOfwork: String,
    rating: Number
});

let doctorModel = mongoose.model('Doctors', doctorSchema);

module.exports = doctorModel;