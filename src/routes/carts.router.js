import e, { Router } from "express";
import MongoCartManager from "../../Dao/mongo/managers/carts.js";

const router = Router();
const cartManager = new MongoCartManager()

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
        if (!result) res.status(404).send({ status: "error", error: "Cart not found" });
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
        res.send({ status: "error", error:"Cart NOT found" });
    }
})

router.delete("/:cid", async (req, res) => {
    const { cid } = req.params;
    try {

        const result = await cartManager.deleteCart(cid)
        res.sendStatus(200)
    } catch (error) {        
        res.send({ status:"Error", error: "Cart NOT found" })
    }

})


export default router;