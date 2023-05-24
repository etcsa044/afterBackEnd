import mongoose, { mongo } from "mongoose";

const collection = "products";

const schema = new mongoose.Schema({
    title:{
        type: String,
        required:true   
    },
    description:{
        type: String,
        required:true   
    },
    category:{
        type: String,
        required:true   
    },
    thumbnail:{
        type: Array,
        required:true   
    },
    code:{
        type:String,
        unique:true
    },
    price:{
        type: Number,
        required:true   
    },
    stock:{
        type: Number,
        required:true   
    },
    status:{
        type: Boolean,
        required:true   
    },
},{timestamps:{createdAt:`created_at`, updatedAt:`updated_at`}})

const productModel = mongoose.model(collection,schema);
export default productModel;

