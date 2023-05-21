import mongoose, { mongo } from "mongoose";

const collection = "products";

const schema = new mongoose.Schema({
    title:String,
    description:String,
    category:String,
    thumbnail:Array,
    code:{
        type:String,
        unique:true
    },
    price:Number,
    stock:Number,
    status:Boolean
},{timestamps:{createdAt:`created_at`, updatedAt:`updated_at`}})

const productModel = mongoose.model(collection,schema);
export default productModel;

