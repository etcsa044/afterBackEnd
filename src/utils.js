import {fileURLToPath} from 'url';
import { dirname } from 'path';
import ProductManager from '../Managers/ProductManager.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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




export default __dirname;