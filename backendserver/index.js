const { MongoClient, ObjectId } = require("mongodb");
const express = require('express')
const app = express()
const port = 3001
app.use(express.json());
const url="mongodb://127.0.0.1:27017"
const dbName = "collage";
const client=new MongoClient(url)
let db;
async function connectDB(){
    try{
        await client.connect();
        db=client.db(dbName)
    }catch(error){
        console.log(error)
    }
}
connectDB()

app.get('/api/user',function(req,res){
    res.send("Simple User get api")
})
app.get('/api/user/:id/:name/:age',function(req,res){
    //https://localhost/3000/api/user/1000/raj/20
    console.log(req.params.name)
    console.log(req.params.id)
    console.log(req.params.age)
    res.send("Simple User get with param api")
})
app.get('/api/user/query',function(req,res){
    // example
    // https://localhost/3000/api/user?name='raj'&age=40
    console.log(req.query)
      res.send("Simple User get with param api")
})


app.get('/api/user/:name',function(req,res){
    // https://localhost/3000/api/user/10001
    console.log(req.params.id)
     res.send("Simple User get with param api")
})

app.post('/api/user/create',function(req,res){
    console.log(req.body)
     res.send("Simple User get with param api")
})

app.post('/api/user/update/:id',function(req,res){
    const id=new ObjectId(req.params.id)
    console.log(req.params.id)
    console.log(req.body)
     res.send("Simple User get with param api")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
