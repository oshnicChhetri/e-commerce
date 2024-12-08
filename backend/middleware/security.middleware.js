import jwt from "jsonwebtoken";
import User from "../models/user.models.js";


export const protectRoute = async (req, res, next) =>{
    try{
        const acessToken = req.cookies.acessToken;
        if(!acessToken){
            return res.status(401).json({ message: "No acess token porvided"});

        
        }
        const decoded = jwt.verify(acessToken, process.env.ACESS_TOKEN_SECRET);

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(401).json({ message : "User not found"});
        }

        req.user = user;
        next()
    }catch(error){
        console.log("Error in security middleware", error.message);
        res.status(401).json({ error: "Invalid or expired token" });
    }
}

export const adminRoute = (req,res,next) =>{
    if(req.user && req.user.userRole == "admin"){
        next()
    } else{
        return res.status(403).json({message : "Acess denied - Admin only"})
    }
}