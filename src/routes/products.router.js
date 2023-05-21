import {
    Router
} from "express";
import ProductManager from "../../Dao/Managers/ProductManager.js";
import {
    autoId
} from "../utils/utils.js";
import MongoProductManager from "../../Dao/Managers/MongoProductManager.js";



const router = Router();
const pm = new ProductManager();
const mongoPm = new MongoProductManager()

// METODOS MONGO:

// ********** GET *********** //

router.get("/", async (req, res) => {
    try {
        const products = await mongoPm.getProducts()
        res.send({ status: "success", payload: products })
    } catch (error) {
        res.send({ status: "error", error: error })
    }
})


// ********** GET BY ID *********** //

router.get("/:pid", async (req, res) => {
    const { pid } = req.params;
    try {
        const product = await mongoPm.getProductById(pid);
        res.send({ status: "success", payload: product })
    } catch (error) {
        res.send({ status: "error", error: error })
    }
})


// ********** POST *********** //

router.post("/", async (req, res) => {
    
    const products = await mongoPm.getProducts()
    const { title, description, category, thumbnail, code, price, stock, status } = req.body
    
    // validacion de campos completos
    if (!title || !description || !category || !thumbnail || !code || !price || !stock || !status) {
        return res.send({ status: "error", error: "Incomplete values" })
    }
    
    const product = {
        title,
        description,
        category,
        thumbnail,
        code,
        price,
        stock,
        status
    }
    
    //validación de "code" existente:
    
    const validationCode = products.some(e => e.code === product.code);
    
    if (validationCode) {
        res.send({
            status: "Error",
            message: "Código ya ingresado"
        })
    } else {
        try {
            const result = await mongoPm.addProduct(product);
            res.send({ status: "success", payload: result })
        } catch (error) {
            res.send({ status: "error", error: error })
        }
    }
})

// ********** DELETE *********** //

router.delete("/:pid", async (req, res) => {
    
    const {pid} = req.params
    
    try {
        const result = await mongoPm.deleteProduct(pid);
        res.send({ status: "success", payload:"Ud borró el sgte prod: ", result })

    } catch (error) {
        res.send({ status: "error", error: error })
    }
    
})

// ********** UPDATE *********** //

router.put("/:pid", async (req, res)=>{
    const {pid} = req.params
    const productToUpdate = req.body
    try {
        const result = await mongoPm.updateProduct(pid, productToUpdate);
        res.send({status:"success", payload:result})
    } catch (error) {
        console.log(error)
        res.send({ status: "error", error: error })
    }
})

router.get("/realtimeproducts", async (req, res) => {
    
    console.log("ingresó una req");
    
    const products = await pm.getProducts();
    
    console.log(products);
    
    req.io.emit("products", products);
    
    res.send(products);
    
    
})



// POST: Creacion de productos con actualizacion en tiempo real
router.post("/realtimeproducts", autoId, async (req, res) => {
    const products = await pm.getProducts();
    const product = req.body;
    
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock || !product.category || !product.status) {
        res.send({
            status: "Error",
            message: "todos los campos son obligatorios"
        });
        return
    }
    
    const validationCode = products.some(e => e.code === product.code);
    
    if (validationCode) {
        res.send({
            status: "Error",
            message: "Código ya ingresado"
        })
    } else {
        products.push(product);
        await pm.addProduct(products)
        
        req.io.emit("products", products);
        res.send({
            status: "ok",
            message: "Producto agregado en `Real Time`"
        });
    }
})


// DELETE: Borra productos y refresca el listado en TIempo real:

router.delete("/realtimeproducts/:pid", async (req, res) => {

    console.log(req.headers);
    const products = await pm.getProducts();
    let {
        pid
    } = req.params;
    pid = parseInt(pid);
    
    const existId = products.some(e => e.id === pid);
    if (!existId) {
        res.send(400, { message: "Id no encontrado" });
        return
    }
    
    await pm.deleteProduct(pid);
    const UpdatedProducts = await pm.getProducts();
    req.io.emit("products", UpdatedProducts);
    res.status(200).send("Poducto Borrado Satisfactoriamente");
    
});




// METODOS FS

// GETTER DE PRODUCTS:
// router.get("/", async (req, res) => {
//     const data = await pm.getProducts();
//     res.send({
//         status: "ok",
//         message: "Solicitud Completada",
//         data
//     });
// })


// router.post("/", autoId, async (req, res) => {

//     const products = await pm.getProducts();
//     const product = req.body;

//     if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock || !product.category || !product.status) {
//         res.send({
//             status: "Error",
//             message: "todos los campos son obligatorios"
//         });
//         return
//     }

//     const validationCode = products.some(e => e.code === product.code);

//     if (validationCode) {
//         res.send({
//             status: "Error",
//             message: "Código ya ingresado"
//         })
//     } else {
//         products.push(product);
//         await pm.addProduct(products)
//         res.send({
//             status: "ok",
//             message: "producto Agregado correctamente"
//         });
//     }
// })


// router.delete("/:pid", (req, res) => {
//     let {
//         pid
//     } = req.params
//     pid = parseInt(pid);
//     pm.deleteProduct(pid);
//     res.send({
//         status: "ok",
//         message: "producto borrado correctamente"
//     })
// })


export default router