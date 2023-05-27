import express from "express";
import handlebars from "express-handlebars";
import {Server} from "socket.io";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import {__src, __root, connection } from "./utils/utils.js";
import viewsRouter from "./routes/views.router.js"
import mongoose from "mongoose";
import registerChatHandler from "./listeners/chatHandler.js";
import registerRtmHandler from "./listeners/rtpHandler.js";




const app = express();
const PORT = process.env.PORT || 8080; 
const server = app.listen(PORT, ()=>{console.log(`listening on PORT ${PORT}`)});

// Server de sockets:
const io = new Server(server);

// MongoDB:
mongoose.connect(connection)


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__src}/public`));


// handlebars:
app.engine("handlebars", handlebars.engine());
app.set("views", `${__src}/views`);
app.set("view engine", "handlebars" );


// midleware IO
app.use((req, res, next) => {
    req.io = io;
    next();
});

//routers
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/", viewsRouter);



io.on(`connection`, socket => {    
    registerChatHandler(io, socket);
    registerRtmHandler(io, socket);
});

