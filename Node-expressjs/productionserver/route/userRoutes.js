const express=require('express')
const rounter=express.Router()
const userController=require('../controller/userController')
const viewController=require('../controller/viewController')
rounter.post('/user/create',userController.createUser)
rounter.post('/user/update/:id',userController.UpdateUser)
rounter.get('/user/delete/:id',userController.deleteUser)
rounter.get('/post',viewController.GetPostData)
module.exports=rounter;