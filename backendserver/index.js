const { MongoClient } = require("mongodb");
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
// Simple API Routes
app.get("/:name", async(req, res) => {
    console.log(req.query.name)
     console.log(req.query.age)
    const result = await db.collection("users").findOne({name:req.params.name});
    res.json(result);
});
app.post("/user", async (req,res)=>{
    try{
        const result = await db.collection("users").insertOne(req.body);
        res.json({ message: "User added", id: result });
    }catch(error){
         res.status(500).json({ error: error.message });
    }
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
