import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongoDb from "./db/connectDatabase.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import paymentRoutes from "./routes/payment.route.js";
import couponRoutes from "./routes/coupon.route.js";
import cartRoutes from "./routes/cart.route.js";
import orderRoutes from "./routes/order.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// Middleware to parse JSON and cookies
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(cors());

// Connect to MongoDB
connectToMongoDb();

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/coupon", couponRoutes);
app.use("/api/order", orderRoutes);

export default app; // Export the app for serverless deployment
