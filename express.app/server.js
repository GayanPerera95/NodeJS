
const express = require("express")
const app = express();

const myLogger = function (req,res,next){
    console.log("LOGGED");
    next();
}

const requestTime = function (req,res,next){
    req.reqTime = Date.now()
    next();
}

app.use(myLogger)
app.use(requestTime)

app.get('/',function(req,res){
    res.send(`CurrentTime:${req.reqTime}`);
})

// app.get("/ping",(req,res)=>{
//     res.send("Node Express Application")
// });

app.listen(3000,()=>{console.log("Server started on port 3000")});

