const express=require('express')
const rounter=express.Router()
const userController=require('../controller/userController')
rounter.post('/user/create',userController.createUser)
rounter.post('/user/update/:id',userController.UpdateUser)
rounter.get('/user/delete/:id',userController.deleteUser)
module.exports=rounter;