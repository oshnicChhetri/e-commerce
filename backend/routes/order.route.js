import express from "express";
import Order from "../models/order.model.js"
import {adminRoute, protectRoute} from "../middleware/security.middleware.js";
const router = express.Router();


router.get("/",protectRoute,  async(req,res) =>{
    try{
        const userId = req.user._id;

        
        const userOrders = await Order.find({userId:userId});

        res.status(200).json({
          success: true,
          message: "Orders retrieved successfully",
          orders: userOrders.map((order) => ({
            id: order._id,
            products: order.products.map((product)=> {
             product.findByID(product)
            }),
            totalAmount: order.totalAmount,
            status: order.orderStatus, // Corrected field reference
            createdAt: order.createdAt,
            updatedAt: order.updatedAt,
          })),
        });
    }
    catch(error){
 console.log("Error in get order", error.message);
 res.status(500).json({ message: "Internal server error" });
    }
})


router.put("/:id", protectRoute, adminRoute, async(req,res)=>{
    try {
        const {id:orderId} = req.params;

        const {orderStatus} = req.body;

        const updatedOrder = await Order.findByIdAndUpdate(
          orderId,
          { orderStatus },
          { new: true } // Return the updated document
        );

       res.status(200).json({
         success: true,
         message: "Order status updated successfully",
         order: {
           id: updatedOrder._id,
           orderStatus: updatedOrder.orderStatus,
         },
       });

    } catch (error) {
         console.log("Error in update order status", error.message);
         res.status(500).json({ message: "Internal server error" });
    }
})


export default router;