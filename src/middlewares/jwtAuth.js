import jwt from "jsonwebtoken";


export const authToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) res.status(401).send({status:"error", error:"No logueado"} )
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "jwtSecret", (error, credentials) => {
        if(error) return res.status(401).send({error:"token inválido"});
        req.user = credentials.user;
        next();
    })
}