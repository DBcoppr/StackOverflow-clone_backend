import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String ,required:true},
    email:{type:String ,required:true},
    password:{type:String ,required:true},
    tags:{type:[String] },
    about:{type:String },
    joinedOn:{type:Date ,default:Date.now}
})
const schemav=mongoose.model("user",userSchema)
export default  schemav