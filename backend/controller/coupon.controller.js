import Coupon from "../models/coupon.model.js"

export const getCoupon = async (req,res) =>{
    try {
        const coupon = await Coupon.findone({userId:req.user._id,isActive:true})

        res.status(200).json(coupon || null)    } catch (error) {
        
            console.log("Error in get coupon", error.message);
            res.status(500).json({message:"Internal server error"})
    }
}


export const validateCoupon = async (req,res) =>{

    try{
        const {code} = req.body;

        const coupon = await Coupon.findOne({code:code, userId:req.user._id,isActive:true});

        if(!coupon){
            return res.status(404).json({message:"Coupon not found"});
        }
        
        if(coupon.expiratioinDate < new Date()){
            coupon.isActive = false;
            await coupon.save();
            return res.status(404).json({message:"Coupon expoired"});
        }

        res.status(200).json({
            message:"Coupon is valid",
            code: coupon.code,
            disocountPercentage: coupon.discountPercentage
        })
    }catch(error){
        console.log("Error in validate coupon", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}