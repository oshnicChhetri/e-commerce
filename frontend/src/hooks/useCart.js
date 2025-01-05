import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const useCart = () => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  // Only fetch cart data once when the component mounts
  useEffect(() => {
    
    const getCart = async () => {
      try {
        const response = await fetch("/api/cart/");
        const data = await response.json();
        setCartItems(data || []); // If no data is returned, use an empty array
      } catch (error) {
        toast.error(error.message); // Show error toast on failure
      } finally {
        setLoading(false); // Stop loading
      }
    };

    getCart();
  }, [cartItems]); // Empty array ensures this effect runs only once on mount

  const updateQuantity = async (itemId, quantity) => {
  
    try {
      const res = await fetch(`/api/cart/${itemId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // Optionally update cartItems state after successful update
      // setCartItems(updatedCartItems); // Uncomment if API returns updated cart data
    } catch (error) {
      toast.error(error.message); // Show error toast on failure
    } 
  };

  const deleteCartItem = async (itemId) => {
    
    try {
      const res = await fetch(`/api/cart/${itemId}`, { method: "DELETE" });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      } else {
        toast.success("Item removed successfully");
        // Optionally update cartItems state after item deletion
        // setCartItems(updatedCartItems); // Uncomment if API responds with updated cart data
      }
    } catch (error) {
      toast.error(error.message); // Show error toast on failure
    } 
  };

  return { loading, cartItems, updateQuantity, deleteCartItem };
};

export default useCart;
