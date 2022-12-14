const { default: mongoose } = require('mongoose')
const moongoose=require('mongoose')
const { schema } = require('./Hotel')
const UserSchema=new moongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
    
},{timestamps:true})
module.exports=mongoose.model("user",UserSchema);