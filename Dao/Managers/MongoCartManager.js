import cartModel from "../models/cart.js";


export default class MongoCartManager {

    getCarts = async () => {
        const carts = await cartModel.find();
        return carts
    }
    
} //fin de la clase