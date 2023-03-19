const express=require("express");
const {Schema} = require("mongoose");
const mongoose=require('mongoose');

const app=express();
app.use(express.json());

const userModel=require("./userModel");

//sighup input:
//name
//password
//confirm password
//address
//phone
//pic

app.post("/signup",async function(req,res){
    let data=req.body;
    console.log(data);
    let newUser=await userModel.create(data);
    res.json({
        message:"data received",
        data:data
    })
})
app.listen(3000,function(){
    console.log("server is started listening at 3000 port");

})

//
 