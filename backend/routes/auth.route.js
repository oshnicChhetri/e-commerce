import express from "express";
import { signup,login,logout, createAccount } from "../controller/auth.controller.js";
import {protectRoute, adminRoute} from "../middleware/security.middleware.js"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/createAccount", protectRoute, adminRoute, createAccount)



export default router;
