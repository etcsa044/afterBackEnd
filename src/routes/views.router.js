import { Router } from "express";
import MongoCartManager from "../../Dao/mongo/managers/carts.js";
import MongoProductManager from "../../Dao/mongo/managers/products.js";

const router = Router();
const pm = new MongoProductManager();

router.get("/", async (req,res)=>{
    res.render("index")
})

router.get("/products", async (req, res) => {

    const {page=1,limit=10} = req.query;

    console.log(`page: ${page}, limit: ${limit}`)

    const {docs, hasPrevPage, hasNextPage, prevPage, nextPage, ...rest} = await pm.getProducts(page, limit);
    
    console.log(docs)
    
    res.render("products", {docs, page:rest.page, hasPrevPage, hasNextPage, prevPage, nextPage, limit})
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