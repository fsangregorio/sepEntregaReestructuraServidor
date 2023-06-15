
import { Router } from "express";
import passport from "passport";
import { login, logout, signup , signupPaspport, loginPassport, failed, current } from "../controllers/sessionController.js";
import auth from "../../presentation/middleware/auth.js";

const sessionRouter = Router();

sessionRouter.post("/login", login);
sessionRouter.get("/current", auth, current);
sessionRouter.post("/signup", signup);
sessionRouter.post("/logout", logout);

sessionRouter.post("/login", login);
sessionRouter.post("/logout", logout);
sessionRouter.post("/signup", signup);
sessionRouter.post("/signup-passport",
    passport.auth("singupPassport", {
      failureRedirect: "/api/sessions/signupfail",
    }),
    signupPaspport
);
sessionRouter.get("/signupfail", failed);
sessionRouter.post("/login-passport",
    passport.auth("loginPassport"),
    loginPassport
);  
sessionRouter.get("/github",
    passport.auth("github",
      { scope: ["user:email"] },
      async (req, res) => {}
    )
);  
sessionRouter.get("/github/callback",
    passport.auth("github", { failureRedirect: "/login" }),
    async (req, res) => {
      req.session.user = req.user;
      console.log(req.user);
      res.redirect("/");
    }
);
  
export default sessionRouter;