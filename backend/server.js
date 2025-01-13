import express from "express";
import dotenv from "dotenv";

import connectToMongoDb from "./db/connectDatabase.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import paymentRoutes from "./routes/payment.route.js";
import couponRoutes from "./routes/coupon.route.js";
import cartRoutes from "./routes/cart.route.js";
import orderRoutes from "./routes/order.route.js";
import path from "path"
import cookieParser from "cookie-parser";
// import path from "path";

dotenv.config();

const app = express();

// Enable CORS - This will allow all origins by default


// Middleware to parse JSON and cookies
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// Connect to MongoDB
connectToMongoDb();

// Define the port for the server
const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();
// API Routes
app.use("/api/auth/", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/coupon", couponRoutes);
app.use("/api/order", orderRoutes);

// Serve the frontend (if applicable)


// Catch-all route to serve the frontend app
app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
