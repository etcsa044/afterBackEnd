import mongoose from "mongoose";

const collection = "users";


const schema = new mongoose.Schema({
    first_name : {
        type : String,
    },
    last_name : {
        type:String,
    },
    email : {
        type: String,
        index : true
    },
    password:{
        type: String,
    },
    role:{
       type:String,
       default:"user" 
    }
},{timestamps:{createdAt:`created_at`, updatedAt:`updated_at`}})

const userModel = mongoose.model(collection, schema);

export default userModel;