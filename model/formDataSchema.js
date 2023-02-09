const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

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
formDataSchema.plugin(AutoIncrement, {inc_field: 'token'});
const FormData = mongoose.model('FORM-DATA',formDataSchema);

module.exports = FormData;