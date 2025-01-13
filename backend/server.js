import express from "express";
import dotenv from "dotenv";
import connectToMongoDb from "./db/connectDatabase.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import paymentRoutes from "./routes/payment.route.js";
import couponRoutes from "./routes/coupon.route.js";
import cartRoutes from "./routes/cart.route.js";
import orderRoutes from "./routes/order.route.js";

import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

// const __dirname = path.resolve();
const app = express();

// Middleware to parse JSON and cookies
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// Connect to MongoDB
connectToMongoDb();

// Define the port for the server
const PORT = process.env.PORT || 8000;

// API Routes
app.use("/api/auth/", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/coupon", couponRoutes);
app.use("/api/order", orderRoutes);

// Serve the frontend (built with React or any other SPA framework)
<<<<<<< HEAD
// app.use(express.static(path.join(__dirname, "/frontend/public")));

// Catch-all route to serve the frontend app
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "frontend", "public", "index.html"));
// });
=======
app.use(express.static(path.join(__dirname, "/frontend/public")));

// Catch-all route to serve the frontend app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "public", "index.html"));
});
>>>>>>> ddcf52b810f6b40e6aad20b97b6dffdd69dbdd55

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
