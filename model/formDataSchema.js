const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    purposeOfVisit: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    entryTime: {
        type: String,
        required: true
    }
})

const FormData = mongoose.model('FORM-DATA',formDataSchema);

module.exports = FormData;