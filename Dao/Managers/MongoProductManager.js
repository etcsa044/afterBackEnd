
import productModel from "../models/products.js"



export default class MongoProductManager {

    getProducts = async () => {
        const products = await productModel.find()
        return products
    }

    getProductById = async (id) => {
            const product = await productModel.findById(id);
            return product;        
    }

    addProduct = async (product) => {
            return productModel.create(product);        
    }

    updateProduct = async(id, product) => {
        return productModel.findByIdAndUpdate(id,product)
    }

    deleteProduct = async (id) => {
        return productModel.findByIdAndDelete(id);
    }
}