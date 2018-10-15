'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserDetailsSchema = new Schema({
    firstName: {
        type: String,
        default: "Enter your First Name"
    },
    surname: {
        type: String,
        default: "Enter your Surname"
    },
    address: {
        type: String,
        default: "Enter your Address"
    },
    dateOfBirth: {
        type: String,
        default: "Enter your Date of Birth"
    },
    qualifications: {
        type: [String],
        default: "No qualifications entered"
    }
});

module.exports = mongoose.model('userDetails',UserDetailsSchema);
