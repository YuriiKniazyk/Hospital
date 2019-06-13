const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let departmentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
});

let departmentModel = mongoose.model('Departmens', departmentSchema);

module.exports = departmentModel;