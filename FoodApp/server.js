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
    try{
    let data=req.body;
    console.log(data);
    let newUser=await userModel.create(data);
    res.json({
        message:"data received",
        data:data
    })
}
catch(err){
    res.send(err.message);
}
})




app.post("/login",async function(req,res){
    try{
        let data = req.body;

        let {email,password}=data;
        if(email && password){
            let user=await userModel.findOne({email:email});
            console.log(user);
            if(user){
                if(user.password==password){
                    res.send("User logged in");
                }
                else{
                    res.send("email or password is incorrect");

                }
            }
            else
            {
                res.send("user with this email does not exit please sighup");
            }
        }
        else{
            res.send("kindly enter the email and password");
        }

    }
    catch(err){
        console.log(err.message);
    }
})
app.listen(3000,function(){
    console.log("server is started listening at 3000 port");

})

//
 