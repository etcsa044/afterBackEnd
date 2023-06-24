import passport from "passport";
import local from "passport-local";
import { createHash, validatePassword } from "../utils/utils.js";
import userModel from "../../Dao/mongo/models/user.model.js";
import GithubStrategy from 'passport-github2';

const localStrategy = local.Strategy;

const initializePassportStrategies = () => {



    // Estrategia de registro local a través de PASSPORT:
    passport.use("register", new localStrategy({ passReqToCallback: true, usernameField: "email" }, async (req, email, password, done) => {
        try {
            const { first_name, last_name, } = req.body
            const exists = await userModel.findOne({ email });
            if (exists) return done(null, false, { message: "e-mail ya registrado" });
            const hashedPassword = await createHash(password);
            const user = {
                first_name,
                last_name,
                email,
                password: hashedPassword
            }
            const result = await userModel.create(user);
            done(null, result)
        } catch (error) {
            done(error);
        }
    }));


    passport.use("login", new localStrategy({ usernameField: "email" }, async (email, password, done) => {

        let user;

        if (email === "adminCoder@coder.com" && password === "adminCod3r123") {
            const user = {
                id: 0,
                name: `SuperAdmin`,
                email: "...",
                role: "admin"
            }
            return done(null, user);
        };


        user = await userModel.findOne({ email });

        if (!user) return done(null, false, { message: "Credenciales incorrectas" });

        const isValidPassword = await validatePassword(password, user.password);
        if (!isValidPassword) return done(null, false, { message: "Contraseña Invalida" });

        user = {
            id: user._id,
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            role: user.role
        }

        return done(null, user);

    }))

    //Acá se pueden poner otras estrategias, ya sea de login o registro por redes.

    passport.use("github", new GithubStrategy({
        clientID:"Iv1.98394d7a09ade5b0",
        clientSecret:"64b9450e5b6b7992fe25f9d336eddd1edfe6530e",
        callbackURL: "http://localhost:8080/api/session/githubcallback"
    }, async (accessToken, refreshToken, profile, done) => {
        try {
          const { name, email } = profile._json;

          const user = await userModel.findOne({ email });
          
          if(!user) {
            const newUser =  {
              first_name: name,
              last_name : "",
              email : `${name}@github.com`,
              password:''
            }
            const result = await userModel.create(newUser);
            return done(null, result);
        }
          done(null,user);
        } catch (error) {
          done(error);
        }
      }
    )
  );

    passport.serializeUser(function(user,done){
        return done(null, user.id);
    })
    passport.deserializeUser(async function(id, done){
        const user = await userModel.findOne({_id:id})
        return done(null, user)
    })

}

export default initializePassportStrategies; //Luego importar en APP para inicializar