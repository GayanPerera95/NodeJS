
const express = require("express");
const app = express();

const PORT = 3000;

app.set('view engine','pug')

app.get('/',function(req,res){
    res.render('index')
}).listen(PORT,()=>{console.log("Server Start on http://localhost:3000")});
