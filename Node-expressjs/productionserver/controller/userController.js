const User=require('../models/user')
const Subject=require('../models/subject')
exports.createUser= async (req,res)=>{
    try{
        const user=await User.create(req.body)
        const subject={...req.body.subject[0],...{UserId:user._id}}
        console.log(subject)
        const sub= await Subject.create({subject:'hinid',type:'hiii',UserId:user._id})
        res.json(user)
    } catch(e){
        console.log(e)
    }
}
exports.UpdateUser= async (req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(user)
    } catch(e){
        console.log(e)
    }
}
exports.deleteUser= async (req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id)
        res.json(user)
    } catch(e){
        console.log(e)
    }
}