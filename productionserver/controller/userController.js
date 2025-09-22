const User=require('../models/user')
exports.createUser= async (req,res)=>{
    try{
        const user=await User.create(req.body)
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