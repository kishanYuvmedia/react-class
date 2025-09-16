const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,      // must be provided
        trim: true,          // removes spaces
        minlength: 3,        // minimum length
        maxlength: 50        // maximum length
    },
    city: {
        Type: String,
        default: 'Ajmer',
        required: false,
    },
    mobileNumber: {
        Type: String,
        required: true,
        unique: true,
    },
    subject: {
        Type: [String],
        required: true
    },
    date: {
        Type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("user", userSchema);