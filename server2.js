const express= require("express");

const app=express();

//CASE 1
//only first app.get code will run 
// app.get("/simple/",function(req,res){
//     res.send("simple output");
// });


// app.get("/simple/",function(req,res){
//     res.send("simpe output 2");
// })

// app.get("/simple/",function(req,res){
//     console.log("simple output 3");

// })


//CASE 2---------------------------------->
// app.use(function(req,res){
//     res.send("use will always run");

// })
// //when app.use is use then only app.use is run irrespective to get,patch,delete

// app.get("/simple/",function(req,res){
//     res.send("Hello from get ");
// })
// app.patch("/simple/",function(req,res){
//     res.send("Hello from patch");
// })
// app.delete("/simple/",function(req,res){
//     res.send("Hello from delete");
// })


//CASE 3------------>

//middleware

//user defined middleware ->>>>next call

app.use(function(req,res,next){ ///ir can test authorize here then after next line will executes here 
    
 console.log("use will always run");
 next(); //it tells to run the next line also 
})

app.post("/simple/",function(req,res){
    res.send("hello from post");
})

app.patch("/simple",function(req,res){
    res.send("hello from patch");
})



app.listen(3000,function(){
    console.log("server is started listening");
});