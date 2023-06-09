import { Router } from "express";
import MongoCartManager from "../../Dao/mongo/managers/carts.js";
import MongoProductManager from "../../Dao/mongo/managers/products.js";
import { privacy } from "../middlewares/auth.js";


const router = Router();
const pm = new MongoProductManager();
const cartManager = new MongoCartManager();

router.get("/", async (req, res) => {
    res.render("index")
})

router.get("/products", privacy("PRIVATE"), async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const { docs, hasPrevPage, hasNextPage, prevPage, nextPage, ...rest } = await pm.getProducts(page, limit);
    res.render("products", { docs, page: rest.page, hasPrevPage, hasNextPage, prevPage, nextPage, limit, user: req.session.user })
})


router.get("/realtimeproducts", privacy("PRIVATE"), async (req, res) => {
    res.render("realtimeproducts");
})

router.get("/cart/:cid", privacy("PRIVATE"), async (req, res) => {
    const { cid } = req.params
    try {
        const cart = await cartManager.getCartBy(cid);
        res.render("cart", { cart: cart })
    } catch (error) {
        res.render("error")
    }

})

router.get("/chat", privacy("PRIVATE"), async (req, res) => {
    res.render("chat")
})


router.get("/register", privacy("NO_AUTHENTICATED"), async (req, res) => {
    res.render("register");
})

router.get("/login", privacy("NO_AUTHENTICATED"), async (req, res) => {
    res.render("login");
})

router.get("/restorepassword", privacy("NO_AUTHENTICATED"), async(req, res)=>{
    console.log(req.body)
    res.render("restorepassword");
})

router.get("/maxattempts", async (req, res)=>{
    res.render("maxattempts");
})



export default router;