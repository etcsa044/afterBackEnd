import { Router } from "express";
import MongoCartManager from "../../Dao/mongo/managers/carts.js";
import MongoProductManager from "../../Dao/mongo/managers/products.js";

const router = Router();
const pm = new MongoProductManager();
const cartManager = new MongoCartManager();

router.get("/", async (req, res) => {
    res.render("index")
})

router.get("/products", async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const { docs, hasPrevPage, hasNextPage, prevPage, nextPage, ...rest } = await pm.getProducts(page, limit);
    res.render("products", { docs, page: rest.page, hasPrevPage, hasNextPage, prevPage, nextPage, limit })
})


router.get("/realtimeproducts", async (req, res) => {
    res.render("realtimeproducts");
})

router.get("/cart/:cid", async (req, res) => {
    const { cid } = req.params
    try {
        const cart = await cartManager.getCartBy(cid);
        res.render("cart", { cart: cart })
    } catch (error) {
        res.render("error")
    }

})

router.get("/chat", async (req, res) => {
    res.render("chat")
})


export default router;