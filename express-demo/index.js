const express=require('express');

const app=express();

 
// app.post();
// app.put();
// app.delete();

app.get('/', (req,res)=>{
res.send("hello world!!!");
});

app.get("/api/courses",(req,res)=>{
res.send([1,2,3]);
});

// /api/courses/1

app.get('/api/posts/:year/:month',(req,res)=>{
 res.send(req.params);
});


//PORT 
const port=process.env.PORT || 3000;


app.listen(port, ()=>console.log(`listening on por ${port}....`));
