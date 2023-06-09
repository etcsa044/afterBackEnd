import express from "express";
import handlebars from "express-handlebars";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import { Server } from "socket.io";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.router.js";
import sessionsRouter from "./routes/session.routes.js";
import { __src, __root, connection } from "./utils/utils.js";
import registerChatHandler from "./listeners/chatHandler.js";
import registerRtmHandler from "./listeners/rtpHandler.js";
import passport from "passport";
import initializePassportStrategies from "./config/passport.config.js";


const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => { console.log(`listening on PORT ${PORT}`) });

// Server de sockets:
const io = new Server(server);

// MongoDB:
mongoose.connect(connection);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__src}/public`));

// Sessions:

app.use(session({
    store: new MongoStore({
        mongoUrl: connection,
        ttl:1800
    }),
    secret: "charlieBack3nd",
    resave: false,
    saveUninitialized: false
}))

// handlebars:
app.engine("handlebars", handlebars.engine());
app.set("views", `${__src}/views`);
app.set("view engine", "handlebars");


// midleware IO
app.use((req, res, next) => {
    req.io = io;
    next();
});

//midleware Passport:
app.use(passport.initialize());
initializePassportStrategies();

//routers
app.use("/api/carts", cartsRouter);
app.use("/api/products", productsRouter);
app.use("/api/session", sessionsRouter);
app.use("/", viewsRouter);


// Socket
io.on(`connection`, socket => {
    registerChatHandler(io, socket);
    registerRtmHandler(io, socket);
});

