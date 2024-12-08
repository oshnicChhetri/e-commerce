import express from "express";
import dotenv from "dotenv";
import connectToMongoDb from "./db/connectDatabase.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import adminRoutes from "./routes/admin.route.js"
import cookieParser from "cookie-parser"
import { deleteBlockedProducts } from "./db/delete.products.js";
import cron from "node-cron";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser())

const PORT = process.env.PORT || 8000 ;




app.use("/api/auth/",authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/admin",adminRoutes)



app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
    connectToMongoDb();
})

cron.schedule(
  "0 0 * * *",
  () => {
    console.log("Running scheduled task to delete expired blocked products");
    deleteBlockedProducts();
  },
  {
    scheduled: true,
    timezone: "Europe/London", // Specify the timezone you want
  }
);