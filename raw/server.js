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
    res.send("multiply of two number is "+mul);

});

//PATCH---update

app.patch("/sayHell",function(req,res){
    let datatoupdate=req.body;
    for(key in datatoupdate){
        user[key]=datatoupdate[key];
    }
   res.json({
    message:"data updated successfully",
    user:user
   })
    // console.log(datatoupdate);
    // res.send("hello from the patch ");
})



//DELETE ---DELETE  A VALUE IN JSON FORMAT
app.delete("/sayHell",function(req,res){
    user={};
    res.json({
        message:"deletion done",
        user:user
    })
})


app.listen(3000,function(){
    console.log("server is started listening");
});
