import { Router } from "express";
import ProductManager from "../../Managers/ProductManager.js";

const router = Router();
const pm = new ProductManager();


router.get("/products", async (req, res) => {
    const products = await pm.getProducts(); //array 
    res.render("index", {prod : products})
})


export default router;