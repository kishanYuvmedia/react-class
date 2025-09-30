const mongoose =require('mongoose')
const post = new mongoose.Schema({
  title: String,
  content: String,
});
const user=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Value is required"],
            maxlength:[20,"string must be 20 length"],
            minlength:10,
        },
        email:{
            type:String,
            default:'user@gmail.com',
            unique:true,
            match:[/^\S+@\S+\.\S+$/,"meesage"]
        },
        status:{
            type:String,
            default:'A',
        },
        gender:{
            type:String,
            enum:{
                Values:['Man','Women','Other'],
                message:'{VALUE} Gender Required'
            },
            message:props=>`${props.value} Gender is not valid`
        },
        price:{
            type:Number,
            max:100,
            min:50,
            validate:{
                validator:function(v){
                    return v>0;
                }
            }
        },
        userId:{
            type:String,
            validate:{
                validator: async function(v){
                    const count=await mongoose.model.subject.countDocument({ userId: value })
                    return count; 
                }
            }
        },
        create_date:{
            type:Date,
            default:new Date()
        }
        
    }
)
module.exports=mongoose.model('user',user)