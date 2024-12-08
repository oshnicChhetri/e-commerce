import express from "express";
import { adminRoute, protectRoute } from "../middleware/security.middleware.js";
import {paginate} from "../middleware/pagination.middleware.js";
import { getProductsByCategory,addProduct,deleteProduct,getAllProducts } from "../controller/product.controller.js";



const router = express.Router();

router.get("/category/:category",getProductsByCategory);
router.get("/admin/products", protectRoute, adminRoute, getAllProducts);
router.post("/add/product",protectRoute,adminRoute, addProduct);
router.delete("delete/:id", protectRoute,adminRoute, deleteProduct );


export default router;