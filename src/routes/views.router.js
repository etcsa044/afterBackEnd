import { Router } from "express";
import MongoCartManager from "../../Dao/mongo/managers/MongoCartManager.js";
import MongoProductManager from "../../Dao/mongo/managers/MongoProductManager.js";

const router = Router();
const pm = new MongoProductManager();


router.get("/products", async (req, res) => {
    const products = await pm.getProducts();
    res.render("index", {prod : products})
})


router.get("/realtimeproducts", async (req, res) => {
    res.render("realtimeproducts");
})

router.get("/carts", async (req, res) => {
    const cartManager = new MongoCartManager()
    const carts = await cartManager.getCarts()

    res.render("carts", {carts : carts})
})

export default router;