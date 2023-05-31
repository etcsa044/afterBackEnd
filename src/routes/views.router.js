import { Router } from "express";
import MongoCartManager from "../../Dao/mongo/managers/carts.js";
import MongoProductManager from "../../Dao/mongo/managers/products.js";

const router = Router();
const pm = new MongoProductManager();

router.get("/", async (req,res)=>{
    res.render("index")
})

router.get("/products", async (req, res) => {

    const {page = 1} = req.query;

    const {docs, hasPrevPage, hasNextPage, prevPage, nextPage, ...rest} = await pm.getProducts(page);
    
    const products = docs;
    
    res.render("products", {products, page:rest.page, hasPrevPage, hasNextPage, prevPage, nextPage})
})


router.get("/realtimeproducts", async (req, res) => {    
    res.render("realtimeproducts");
})

router.get("/carts", async (req, res) => {
    const cartManager = new MongoCartManager();
    const carts = await cartManager.getCarts();
    console.log(JSON.stringify(carts, null, `\t`))
    res.render("carts", {carts : carts})
})

router.get("/chat", async (req,res) => {
    res.render("chat")
})


export default router;