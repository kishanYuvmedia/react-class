const mongoose =require('mongoose')
const user=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            default:'user@gmail.com'
        },
        status:{
            type:String,
            default:'A'
        }
    }
)
module.exports=mongoose.model('user',user)