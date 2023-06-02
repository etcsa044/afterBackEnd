import {
    Router
} from "express";
import ProductManager from "../../Dao/fileSystem/ProductManager.js";
import MongoProductManager from "../../Dao/mongo/managers/products.js";



const router = Router();
const pm = new ProductManager();
const mongoPm = new MongoProductManager()

// METODOS MONGO:

// ********** GET *********** //

router.get("/", async (req, res) => {
    try {
        const {limit, page} = req.query;
        console.log(limit, page)
        const products = await mongoPm.getProducts(limit, page)
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

    console.log(products.docs)

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

    const validationCode = products.docs.some(e => e.code === product.code);

    console.log(validationCode)

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

router.post("/many", async(res, req)=>{
    // try {
    //     const products = req.body;
    // await mongoPm.createMany(products);
    // res.sendStatus(200)
    // } catch (error) {
    //     console.log(error)
    //     res.sendStatus(500)
    // }
    
})

// ********** DELETE *********** //

router.delete("/:pid", async (req, res) => {

    const { pid } = req.params

    try {
        const result = await mongoPm.deleteProduct(pid);
        res.send({ status: "success", payload: "Ud borró el sgte prod: ", result })

    } catch (error) {
        res.send({ status: "error", error: error })
    }

})

// ********** UPDATE *********** //

router.put("/:pid", async (req, res) => {
    const { pid } = req.params
    const productToUpdate = req.body
    try {
        const result = await mongoPm.updateProduct(pid, productToUpdate);
        res.send({ status: "success", payload: result })
    } catch (error) {
        console.log(error)
        res.send({ status: "error", error: error })
    }
})

// ********** REAL TIME PRODUCTS *********** //



router.post("/realtimeproducts", async (req, res) => {

    try {
        const product = req.body
        await mongoPm.addProduct(product);

        const products = await mongoPm.getProducts();
        req.io.emit("products", products);
        res.sendStatus(200);

    } catch (error) {
        res.send({ status: "Error", error: "Codigo ya ingresado" })
    }

})

router.delete("/realtimeproducts/:pid", async (req, res) => {

    const { pid } = req.params

    try {
        const result = await mongoPm.deleteProduct(pid);
        if(!result) {res.send({status: "error", error:"id no encontrado"});return};
        const products = await mongoPm.getProducts();
        req.io.emit("products", products);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
})



// ************************ FUNCIONES DE FS *******************


// POST: Creacion de productos con actualizacion en tiempo real
// router.post("/realtimeproducts", autoId, async (req, res) => {
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

//         req.io.emit("products", products);
//         res.send({
//             status: "ok",
//             message: "Producto agregado en `Real Time`"
//         });
//     }
// })


// DELETE: Borra productos y refresca el listado en TIempo real:

// router.delete("/realtimeproducts/:pid", async (req, res) => {

//     console.log(req.headers);
//     const products = await pm.getProducts();
//     let {
//         pid
//     } = req.params;
//     pid = parseInt(pid);

//     const existId = products.some(e => e.id === pid);
//     if (!existId) {
//         res.send(400, { message: "Id no encontrado" });
//         return
//     }

//     await pm.deleteProduct(pid);
//     const UpdatedProducts = await pm.getProducts();
//     req.io.emit("products", UpdatedProducts);
//     res.status(200).send("Poducto Borrado Satisfactoriamente");

// });




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