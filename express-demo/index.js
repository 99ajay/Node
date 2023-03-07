const Joi=require('joi');
const express=require('express');

const app=express();

app.use(express.json());

 const courses=[{id: 1,name: 'course1'},{id: 2,name: 'corse2'},{id: 3,name: 'course3'}];

app.get('/', (req,res)=>{
res.send("hello world!!!");
});

app.get("/api/courses",(req,res)=>{
res.send([1,2,3]);
});

// /api/courses/1

// app.get('/api/posts/:id',(req,res)=>{
//  const course=courses.find(c=>c.id===parseInt(req.params.id));
//  if(!course) //404
//  {
//    res.status(404).send('the course with given id was not find');
//  }
//  res.send(course);
// });





app.post('/api/courses',(req,res)=>{

   // const schema={
   //    name: Joi.string().min(3).required()
   // };

   const schema=Joi.object({name: Joi.string().min(3).required()});

   const result=schema.validate(req.body);
   console.log(result);
   if(!req.body.name || req.body.name.length <3){
      res.status(400).send('name is required minimum of 3 character');
      return;
   }//above validation logic

   const course={
   id: courses.length+1,
   name: req.body.name
   };
   courses.push(course);
   res.send(course);
});







//PORT 
const port=process.env.PORT || 3000;


app.listen(port, ()=>console.log(`listening on port ${port}....`));
