//require express

const express=require("express");

//you hav eto write it-> app signifies ->your server

const app=express();
app.use(express.json());///it is necessary if it does not show then it will undefined 

// app.get("/sayHello",function(req,res){ //forward slash mean anything from the home page 

//     res.send("hello from the offline system");
// })

// app.get("/sayBye",function(req,res){
//     res.send("Bye");
// })

// app.post("/sayHello",function(req,res){
//   console.log(req.body);
//   res.send("post wala hello ");
// });
let user;

app.post("/sayHello/",function(req,res){
//  console.log(req.body);
//  res.send("hello from the post ");
user =req.body;
res.json({
    message:"message send successfully ",
    user:user
})
})
app.get("/getMultiply/:num1/:num2/",function(req,res){  ///sending parameter as a request 
    
    console.log(req.params)

    let num1=req.params.num1;
    let num2=req.params.num2;
    let mul=num1*num2;
    res.end("multiply of two number is "+mul);

});

app.listen(3000,function(){
    console.log("server is started listening");
});
