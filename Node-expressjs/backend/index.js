const express = require('express')
const app = express()
const port = 3001

app.get('/',(req,res)=>{
    res.send("<h1>Hello yuvmedia</h1>")
})

app.get('/user',(req,res)=>{
    res.json({
        name:'rajesh',
        age:45,
        city:'ajmer'
    })
})
app.get('/teacher',(req,res)=>{
    res.json([{
        name:'mukesh kumar',
        age:45,
        city:'ajmer'
    },{
        name:'mukesh kumar',
        age:45,
        city:'ajmer'
    },{
        name:'mukesh kumar',
        age:45,
        city:'ajmer'
    },{
        name:'mukesh kumar',
        age:45,
        city:'ajmer'
    }])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
