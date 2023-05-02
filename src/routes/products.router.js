import {
    Router
} from "express";
import ProductManager from "../../Managers/ProductManager.js";
import {
    autoId
} from "../utils.js";



const router = Router();
const pm = new ProductManager();

// METODOS

// GETTER DE PRODUCTS:
router.get("/", async (req, res) => {
    const data = await pm.getProducts();
    res.send({
        status: "ok",
        message: "Solicitud Completada",
        data
    });
})

router.post("/", autoId, async (req, res) => {

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
        res.send({
            status: "ok",
            message: "producto Agregado correctamente"
        });
    }
})


router.delete("/:pid", (req, res) => {
    let {
        pid
    } = req.params
    pid = parseInt(pid);
    pm.deleteProduct(pid);
    res.send({
        status: "ok",
        message: "producto borrado correctamente"
    })
})

router.get("/realtimeproducts", async (req, res)=>{

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
    const products = await pm.getProducts();
    let {
        pid
    } = req.params;
    pid = parseInt(pid);

    const existId = products.some(e => e.id === pid);
    if(!existId){
        res.send({status:"error", message:"El Id no existe"})
        return
    }

    await pm.deleteProduct(pid);
    const UpdatedProducts = await pm.getProducts();
    req.io.emit("products", UpdatedProducts);
    res.send({
        status: "ok",
        message: "Producto Borrado en `Real Time`"
    });

});


export default router