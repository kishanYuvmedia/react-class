const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requied:true      
    },
    city: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    subject: {
        type: String
    }
})
module.exports = mongoose.model("users", userSchema);