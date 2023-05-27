import MongoProductManager from "../../Dao/mongo/managers/products.js";


const productService = new MongoProductManager();


const registerRtmHandler = async (io, socket) => {

    console.log("rtp Socket connected");  
    const products = await productService.getProducts();
    socket.emit("products", products);
}


export default registerRtmHandler;


