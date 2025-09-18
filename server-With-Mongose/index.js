const express = require('express')
const mongoose=require('mongoose')
const Users=require('./model/user')
const app = express()
const port = 3001
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/collage", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

app.post('/user/create',async(req,res)=>{
  console.log(req.body)
  try{
    const users=new Users(req.body)
    await users.save()
    res.json({message:"done"})
  }catch(e){
    res.json(e)
  }
   
})
app.get('/user/find', async(req, res) => {
  const data= await Users.find()
  res.json(data)
})
app.get('/', (req, res) => {
  res.send("server")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
