const mongoose=require('mongoose');
const {Schema} = require("mongoose");

let dblink=`mongodb+srv://dbUser:0FsmgjbR0H5o6Ug7@cluster0.jnvtpim.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(dblink).then(function(){
    console.log("connected");
}).catch(function(err){
    console.log("error",err);
})


let userSchema=new Schema({
    name:{
        type:String,
        required:[true,"name is not given please provide the name"]
    },
    password:{
        type:String,
        required:[true,"password is missing please provide password"]
    },
    confirmPassword:{
        type:String,
        required:[true,"confirmed password is missing"],
        //custom 
        validate:{
        validator:function(){
            return this.password==this.confirmPassword;
        },
        //error message 
        message:"Password mismatch"
    }
    },
    email:{
        type:String,
        required:[true,"email is missing"],
        unique:true
    },
    phoneno:{
     type:String,
     minLength:10,
     maxLength:10
    },
    pic:{
        type:String,
        default:""
    },
})

const userModel=mongoose.model('FoodUserModel',userSchema);

module.exports=userModel;