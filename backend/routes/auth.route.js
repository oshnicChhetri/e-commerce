import express from "express";
import { signup,login,logout, refreshToken,addPayPal } from "../controller/auth.controller.js";
import {protectRoute} from "../middleware/security.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refreshToken", refreshToken);


export default router;
