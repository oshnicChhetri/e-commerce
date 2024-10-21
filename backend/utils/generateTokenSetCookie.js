import jwt from "jsonwebtoken";
import {redis} from "../db/redis.js"



const generateTokensSetCookie = async(userId, res) =>{
    const acessToken = jwt.sign({userId}, process.env.ACESS_TOKEN_SECRET, {expiresIn: "15m"})

    const refreshToken = jwt.sign({userId}, process.env.REFRESH_TOKEN_SECRET, {expiresIn : "7d"})

    
await redis.set(`refresh_token:${userId}`, refreshToken, "Ex", 7*24*60*60); // 7days
    


    res.cookie("acessToken", acessToken,{
        httpOnly : true,
        secure: process.env.NODE_ENV === "production",
        sameSite:"strict",
        maxAge: 15*60*1000
    })

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7*24*60*60,
    });
}

export default generateTokensSetCookie;