const mongoose =require('mongoose')
const subject=new mongoose.Schema(
    {
        subject:{
            type:String,
            required:true,
        },
        type:{
            type:String
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required:true
        }
    }
)
module.exports=mongoose.model('subject',subject)