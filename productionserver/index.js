const express=require('express')
const connectDB=require('./config/db')
const router=require('./route/userRoutes')
const app=express()
const port=3001
app.use(express.json())
connectDB()
app.use('/api/',router)
app.listen(port,()=>console.log('server is running !'))