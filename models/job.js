var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;


var jobSchema = new Schema({
    nameText: String,
    cellPhoneNumber: String,
    technicianSelect: String,
    emailText: String,
    jobDate: String,
    jobDescription: String
});


module.exports = mongoose.model('jobs', jobSchema);