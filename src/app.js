import express from "express";
import handlebars from "express-handlebars";
import {Server} from "socket.io";
import productsRouter from "./routes/products.router.js";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js"




const app = express();
const PORT = process.env.PORT || 8080; 
const server = app.listen(PORT, ()=>{console.log(`listening on PORT ${PORT}`)});




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/public`));


// handlebars:
app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");



app.use((req, res, next)=>{
    req.id = "Charlie"
    next();
})

//routers
app.use("/api/products", productsRouter);
app.use("/", viewsRouter);



app.get("/", (req, res)=>{
    console.log(req.id)
    res.send({status:"ok", message:`bienvenido de nuevo ${req.id}` });
    
})