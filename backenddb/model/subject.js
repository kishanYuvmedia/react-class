const mongoose = require('mongoose')
const subjectSchema=new mongoose.Schema({
    subject:{
        Type:String,
    },
    userId:{
        Type:String,
    },
    status:{
        Type:String,
        default:'Active'
    },
    mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"       // assuming you have a Teacher model
  }
})
module.exports = mongoose.model("subject", subjectSchema);