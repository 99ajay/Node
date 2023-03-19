const express=require("express");

const app=express();
app.use(express.json());

app.post("/simple",function(req,res,next){
    let data=req.body;
    //Objet.keys(data)=>["name","age"];

    let length=Object.keys(data).length;
    if(length==0)
    {
        res.send("kindly enter the data in the body");
    }
    else{
        next();
    }
})

app.post("/simple",function(req,res){
    console.log("data",req.body);
    res.status(200).send("Hello from the post 2");
})



















app.listen(3000,function(){
    console.log("Server is started at 3000");
})