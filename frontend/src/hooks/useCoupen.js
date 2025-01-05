import { useState, useEffect } from "react";
import {toast} from "react-hot-toast"
const useCoupon = () =>{

 const [couponloading, setCouponnLoading] = useState(false);
 const [coupon, setCoupon] = useState(null);

 useEffect(()=>{
    const getCoupon = async()=>{
        try{
            const res = await fetch("/api/coupon/")
            const data = res.json();
            if(data.error){
                throw new Error(data.error)
            }
            setCoupon(data);

        }catch(error){
            toast.error(error.message)
        }finally{
            setCouponLoading(false)
        }
    }
    getCoupon
 },[])

 return {couponloading, coupon}


}

export default useCoupon;