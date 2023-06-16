import { Router } from "express";
import userModel from "../../Dao/mongo/models/user.model.js";
import { createHash, validatePassword } from "../utils/utils.js";
import passport from "passport";


const router = Router();


router.post("/register", passport.authenticate("register", { failureRedirect: "/api/session/registerFail" }), async (req, res) => {
  res.send({ status: "success", message: "registered" });
})


router.get("api/session/registerFail", async (req, res) => {
  console.log(req.session.message);
  res.status(400).send({ status: "error", error: req.session.message })

})

router.post("/login", passport.authenticate("login", { failureRedirect: "/api/session/loginfail", failureMessage: true }), async (req, res) => {

  req.session.user = {
    name: req.user.name,
    role: req.user.role,
    id: req.user.id,
    email: req.user.email
  }

  return res.status(200).send({ status: "success", message: "Logueo Correcto" });
})

router.get("/loginfail", async (req, res) => {
  res.status(400).send({ status: "error", error: req.session.messages })

})

router.post("/restorepassword", async (req, res) => {
  const { email, password } = req.body

  const user = await userModel.findOne({ email }); //adaptar metodo al manager


  if (!user) return res.status(400).send({ status: "error", message: "Usuario Inexistente" })

  const isSamePassword = await validatePassword(password, user.password);

  if (isSamePassword) return res.status(400).send({ status: "error", message: "Tu contraseña no puede ser igual a la anterior" });

  const newHashedPassword = await createHash(password);

  await userModel.updateOne({ email }, { $set: { password: newHashedPassword } });

  res.status(200).send({ status: "success", message: "Su contraseña se reestableció satisfactoriamente." });
})

//Trigger: 
router.get("/github", passport.authenticate("github"), (req, res) => {
 });

router.get("/githubcallback", passport.authenticate("github"), (req, res) => {


  const user = req.user;

  req.session.user = {
    id: user.id,
    name: user.first_name,
    role: user.role,
    email: user.email
  }


  res.redirect("/products")
})


//Cierre de Sesión:

router.get("/logout", (req, res)=>{
  try {
      req.session.destroy((err) => {
        if(err){
          console.log("Error al cerrar la Sesión", err);
        }else{
          res.redirect("/login");
        }
      })
  } catch (error) {
    
  }
})


// router.post('/jwtLogin', async (req, res) => {
//   const { email, password } = req.body;
//   let accessToken;
//   if (email === 'admin@admin.com' && password === '123') {
//     //Desde aquí ya puedo inicializar al admin.
//     const user = {
//       id: 0,
//       name: `Admin`,
//       role: 'admin',
//       email: '...',
//     };
//     //Adiós a session. GENERO TOKEN
//     accessToken = generateToken(user);
//     res.send({ status: "success", accessToken: accessToken })
//   }
//   let user;

//   user = await userModel.findOne({ email }); //Sólo busco por mail
//   if (!user)
//     return res.sendStatus(400);
//   const isValidPassword = await validatePassword(password, user.password);
//   if (!isValidPassword)
//     return res.sendStatus(400);
//   user = {
//     id: user._id,
//     name: `${user.first_name} ${user.last_name}`,
//     email: user.email,
//     role: user.role,
//   };
//   accessToken = generateToken(user);
//   res.send({ status: "success", accessToken })
// })

// router.get("/jwtProfile")


export default router;