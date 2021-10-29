const mongoose = require('mongoose');

const CrudSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [20, 'Max. Letters 50']
    },
    email: {
        type: String,
        required: true,
    },
    contactNo: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Crud', CrudSchema);