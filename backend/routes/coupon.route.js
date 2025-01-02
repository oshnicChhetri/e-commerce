import express from "express";
import { protectRoute } from "../middleware/security.middleware.js";
import { getCoupon, validateCoupon } from "../controller/coupon.controller.js";
const router = express.Router();

router.get("/", protectRoute, getCoupon)
router.get("/validate", protectRoute, validateCoupon)

export default router