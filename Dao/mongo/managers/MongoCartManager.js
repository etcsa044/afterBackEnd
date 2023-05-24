import cartModel from "../models/cart.js";
import productModel from "../models/products.js";


export default class MongoCartManager {

    getCarts = () => {
        return cartModel.find().lean();
    }

    getCartBy = (param) => {
        return cartModel.findOne(param).lean();
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

    addProductToCart = (cartId, productId) =>{
        const cart = this.getCartBy(cartId);
        const product = productModel.findById(productId)

    }

} //fin de la clase