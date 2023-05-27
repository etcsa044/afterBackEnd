import mongoose from "mongoose";
import cartModel from "../models/cart.js";
import productModel from "../models/products.js";


export default class MongoCartManager {

    getCarts = () => {
        return cartModel.find().populate("products.product").lean();
    }

    getCartBy = (param) => {
        return cartModel.findOne(param).populate("products.product").lean();
    }

    createCart = (cart) => {
        return cartModel.create(cart)
    }

    updateCart = (id, cart) => {
        return cartModel.findByIdAndUpdate(id, { $set: cart });
    }

    deleteCart = (id) => {
        return cartModel.findByIdAndDelete(id);
    }

    addProductToCart = (id, pid)=>{

        return cartModel.updateOne({_id:id}, {$push:{products:{product : new mongoose.Types.ObjectId(pid), quantity:1}}})

    }

   

} //fin de la clase