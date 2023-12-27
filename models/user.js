const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    // resetToken:String,
    // expireToken:Date,
    pic:{
     type:String,
    //  default:"https://res.cloudinary.com/dmboibjap/image/upload/v1686135130/samples/landscapes/girl-urban-view.jpg"
    default:"https://res.cloudinary.com/dmboibjap/image/upload/v1687544004/Screenshot_2023-06-23_234100_kmzxk3.png"
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})

mongoose.model("User",userSchema)