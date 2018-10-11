const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instagram = Schema({
    username: { 
        type: String,
        required: true
        },
    description: String,
    image: {
        type: String, 
        required: true
        },
    towater: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('instagram', instagram);