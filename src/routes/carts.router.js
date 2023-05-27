import e, { Router } from "express";
import MongoCartManager from "../../Dao/mongo/managers/carts.js";
import MongoProductManager from "../../Dao/mongo/managers/products.js";

const router = Router();
const cartManager = new MongoCartManager()
const pm = new MongoProductManager()

router.get("/", async (req, res) => {
    try {
        const result = await cartManager.getCarts();
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.send({ status: "error", error: error });
    }
})

router.get("/:cid", async (req, res) => {

    const { cid } = req.params

    try {
        const result = await cartManager.getCartBy({ _id: cid });
        if (!result) {res.status(404).send({ status: "error", error: "Cart not found" }); return};
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.send({ status: "error", error: error });
    }

})

router.post("/", async (req, res) => {

    const cart = req.body;

    try {
        const result = await cartManager.createCart(cart);
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.send({ status: "error", error: error });
    }
})


router.put("/:cid", async (req, res) => {
    const { cid } = req.params;
    const cart = req.body;
    try {
        const result = await cartManager.updateCart({ _id: cid }, cart)
        res.sendStatus(201)
    } catch (error) {
        res.send({ status: "error", error: "Cart NOT found" });
    }
})

router.delete("/:cid", async (req, res) => {
    const { cid } = req.params;
    try {

        const result = await cartManager.deleteCart(cid)
        res.sendStatus(200)
    } catch (error) {
        res.send({ status: "Error", error: "Cart NOT found" })
    }

})

router.put("/:cid/:pid", async (req, res) => {

    const { pid, cid } = req.params;
    const productId = await pm.getProductById(pid);
    const cart = await cartManager.updateCart(cid)

    console.log(cart);
    console.log(productId._id);

    await cartManager.addProductToCart(cid, productId._id)

    res.sendStatus(200)

})


export default router;