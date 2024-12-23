 import Product from "../models/product.model.js"


export const getCartItems = async (req,res) => {
     
    try {
        const products = await Product.find({_id:{$in:req.user.cartItems}});

        const cartItems = products.map(product => {
            const item = req.user.cartItems.find(cartItem => cartItem.id === product.id);
            return {...product.toJSON(), quantity: item.quantity}
        })
        res.status(200).json(cartItems)
    } catch (error) {
        console.log("Error in get cart items ", error.message);
        res.status(500).json({ message: "Iternal server error" });
    }
}
 
 
 
 export const  addToCart = async (req, res) =>{

    try{
        const {productId} = req.body;
        const user = req.user;

        const existingItem = user.cartItems.find((item) => item.id === productId);

        if(existingItem){
            existingItem.quantity += 1;
        } else {

            user.cartItem.push(productId)
        }

        await user.save();
        res.status(200).json(user.cartItems)
    }catch(error){
        console.log("Error in add to cart ", error.message);
        res.status(500).json({message: "Iternal server error"})
    }
 };


 export const removeProductFromCart = async (req,res) =>{
    try {
        const {productId} = req.body;
        const user = req.user 

        if(!productId){
            user.cartItems = [];
        }else {
            user.cartItems = user.cartItems.filter((item) => item.id !== productId);
        }

        await user.save();
        res.status(200).json(user.cartItems)
    } catch (error) {
        console.log("Error in remove all from cart ", error.message);
        res.status(500).json({ message: "Iternal server error" });
    }
 }

 export const updateQuantity = async (req,res) => {

    try {
        const {id:productId} = req.params;
        const {quantity} = req.body;
        const user = req.user;
        const existingItem = user.cartItems.find((item)=> item.id === productId);

        if(existingItem){
            if(quantity === 0){
                user.cartItems = user.cartItems.filter((item) => item.id !== productId);
                await user.save();
                return res.status(200).json(user.cartItems)
            }
            existingItem.quantity = quantity;
            await user.save();
            return res.status(200).json(user.cartItems)
        }
    } catch (error) {
         console.log("Error in update quantity ", error.message);
         res.status(500).json({ message: "Iternal server error" });
    }
 }

 