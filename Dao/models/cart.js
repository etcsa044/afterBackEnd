import mongoose from "mongoose";

const collection = "carts";

const schema = new mongoose.Schema({
    products:Array
}, {timestamps:{createdAt:`created_at`, updatedAt:`updated_at`}});

const cartModel = mongoose.model(collection, schema);

export default cartModel;