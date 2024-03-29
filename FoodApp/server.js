const express=require("express");
const {Schema} = require("mongoose");
const mongoose=require('mongoose');
const userModel=require("./userModel");
const cookieParser = require("cookie-parser");

var jwt=require("jsonwebtoken");
const secretkeys="dehed83873i3dejje";

const app=express();
app.use(express.json());


app.use(cookieParser());
// app.use(bodyparser.urlencoded({extended : false}));


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




app.post("/login/",async function(req,res){
    try{
        let data = req.body;

        let {email,password}=data;
        if(email && password){
            let user=await userModel.findOne({email:email});
            console.log(user);
            
            if(user){
                if(user.password===password){
                    //create JWT -> payload,secretkeys,algo by default SHA-256

                    const token=jwt.sign({data:user['_id']},secretkeys);
                    console.log(token);

                    res.cookie("JWT",token);
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
app.get("/users",function(req,res){
    console.log(req.cookies);
})


app.listen(3000,function(){
    
    console.log("server is started listening at 3000 port");

})

//
 