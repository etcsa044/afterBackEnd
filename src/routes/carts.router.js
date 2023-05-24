import { Router } from "express";
import MongoCartManager from "../../Dao/mongo/managers/MongoCartManager.js";

const router = Router();
const cartManager = new MongoCartManager()

router.get("/", async (req, res) => {
    try {
        const result = await cartManager.getCarts();
        res.send({status:"success", payload: result});
    } catch (error) {
        res.send({status:"error", error:error});
    }
})



export default router;