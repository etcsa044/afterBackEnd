import mongoose from "mongoose";
import cartModel from "../models/cart.js";


export default class MongoCartManager {

    getCarts = () => {
        return cartModel.find().lean();
    }

    getCartBy = (param) => {
        return cartModel.findById(param).populate("products.product").lean();
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

    addProductToCart = (id, pid) => {
        return cartModel.updateOne({ _id: id }, { $push: {products: { product: new mongoose.Types.ObjectId(pid), quantity: 1, cartId:id  } } })
    }

    modifyQuantity = (cid, pid, quantity=0) => {

        if (!quantity) {
            return cartModel.findOneAndUpdate(
                { _id: cid, 'products.product': pid },
                { $inc: { 'products.$.quantity': 1 } }
            );
        } else {
            return cartModel.findOneAndUpdate(
                { _id: cid, 'products.product': pid },
                { $set: { 'products.$.quantity': quantity } }
            )
        }

    };

    removeProducts = (cid) => {
        return cartModel.findOneAndUpdate({ _id: cid }, { $set: { "products": [] } })
    }

    removeProduct = (cid, pid) => {
        return cartModel.findOneAndUpdate(
            { _id: cid },
            { $pull: { products: { product: pid } } }
        );
    }



} //fin de la clase