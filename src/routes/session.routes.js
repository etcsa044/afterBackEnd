import { Router } from "express";
import userModel from "../../Dao/mongo/models/user.model.js";


const router = Router();


router.post("/register", async (req,res)=>{
    try {
        const result = await userModel.create(req.body);
        res.send({status:"success", payload:result})
    } catch (error) {
        console.log(error);
        res.send({status:"error", error:"error interno"});
    }
})


router.post("/login", async (req, res)=>{
    const {email, password} = req.body;

    if(email === "adminCoder@coder.com" && password === "coder123"){
        req.session.user = {
            name: `SuperAdmin`,
            email: "...",
            role : "admin"
        }
        return res.sendStatus(200);
    };

    const user = await userModel.findOne({email,password});
    if(!user) return res.status(400).send({status:"error", error:"Credenciales incorrectas"});

    req.session.user = {
        name: `${user.first_name} ${user.last_name}`,
        email: user.email
    }

    res.status(200).send({status:"success", message:"acceso correcto"});
})



export default router;