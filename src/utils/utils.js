import {fileURLToPath} from 'url';
import { dirname } from 'path';
import ProductManager from '../../Dao/fileSystem/ProductManager.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Codigo comentado por estar usando Express-Session 

// export const generateToken = (user =>{
//     const token = jwt.sign({user}, "jwtSecret", {expiresIn:"24h"});
//     return token;
// })


const __filename = fileURLToPath(import.meta.url);
const __src = dirname(dirname(__filename))
const __root = dirname(dirname(dirname(__filename)));

const pm = new ProductManager();

// Creador de Id Autoincrementables para diferentes objetos que lleguen por REQ.
export const autoId = async (req, res, next)=>{
    const products = await pm.getProducts(); 
    const product = req.body; 

    if (products.length === 0) {
        product.id = 1;
    } else {
        product.id = products[products.length - 1].id + 1;
    }
    next()
}

//String de Conexión
export const connection = "mongodb+srv://etcsa044:uCdeI4OXFqA9lN9Z@backendcluster.h3wtkp9.mongodb.net/ecommerce?retryWrites=true&w=majority"


export {__src, __root};


//hash de password:

export const createHash = async (password) => {

    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salts);

} 

export const validatePassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
}


//JWT