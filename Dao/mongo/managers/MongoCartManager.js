import cartModel from "../models/cart.js";


export default class MongoCartManager {

    getCarts = async () => {
        return await cartModel.find();
    }

    getCartBy = async (param) => {
        return cartModel.findOne(param);
    } 

    createCart = async (cart) => {
        return cartModel.create(cart)        
    }

    updateCart = async (id, cart) =>{
        return cartModel.findByIdAndUpdate(id,{$set:cart});
    }

    deleteCart = async (id) =>{
        return cartModel.findByIdAndDelete(id);
    }
    
} //fin de la clase