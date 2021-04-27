
const express = require("express")
const app = express();

const PORT = 8000;

const data = {
    id : 1,
    name : "Gayan"
}

app.get('/',(req,res)=>{
    res.end("Welcome to Homepage");
})

app.get('/about',(req,res)=>{
    res.send("Welcome to AboutPage");
})

app.get('/weather',(req,res)=>{
    res.json(data)
})

app.listen(PORT,()=>{console.log("Server is Started on POST",PORT)});
