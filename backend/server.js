import express from "express";
import dotenv from "dotenv";
import connectToMongoDb from "./db/connectDatabase.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import paymentRoutes from "./routes/payment.route.js";
import couponRoutes from "./routes/payment.route.js";
import cartRoutes from "./routes/cart.route.js";
import cookieParser from "cookie-parser";
// import path from "path"

dotenv.config();

// const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8000;

app.use("/api/auth/", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);
app.use("api/coupon",couponRoutes);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connectToMongoDb();
});
