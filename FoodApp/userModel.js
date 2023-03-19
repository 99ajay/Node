const mongoose=require('mongoose');

let dblink=`mongodb+srv://dbUser:0FsmgjbR0H5o6Ug7@cluster0.jnvtpim.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(dblink).then(function(){
    console.log("connected");
}).catch(function(err){
    console.log("error",err);
})