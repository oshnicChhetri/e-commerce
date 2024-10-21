import express from "express";
import dotenv from "dotenv";
import connectToMongoDb from "./db/connectDatabase.js";
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser())

const PORT = process.env.PORT || 8000 ;


// app.get("/",(req,res)=>{
//     res.send("wassup ")
// })

app.use("/api/auth/",authRoutes);


app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
    connectToMongoDb();
})