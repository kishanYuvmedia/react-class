const mongoose =require('mongoose')
const post = new mongoose.Schema({
  title: String,
  content: String,
});
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
        },
        //subjects:[post],
    }
)
module.exports=mongoose.model('user',user)