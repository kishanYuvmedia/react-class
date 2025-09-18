var express = require('express');
var app = express();
app.get('/things/:id', function(req, res){
 res.send('id: ' + req.params.id);
});
app.get('/things/:id([0-9]{5})', function(req, res){
 res.send('id: ' + req.params.id);
});

app.get('/things/:name/:id', function(req, res){
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
})
app.get('/things', function(req, res){
    console.log(req.quary)
    res.send('Quary params data');
})
app.post('/things',function(req,res){
    console.log(req.body)
})
app.listen(3000);