import { useState,useEffect } from "react";

const CartOrderSummery = ({cartItems}) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate totalAmount when cartItems change
    const total = cartItems.reduce((amount, cartItem) => {
      return amount + Math.round( cartItem.price * cartItem.quantity * 100) / 100; 
    }, 0);

    setTotalAmount(total); // Update state with the calculated total
  }, [cartItems]);
  return (
      <div className="orderSummary">
          
          <p>Total Amount: <span className="totalAmount">{`£${totalAmount}`}</span></p>
      <p>Original Amount: <span className="originalAmount">{`£${totalAmount}`}</span></p>
          {/* <p>Discount: $5.00</p> */}
          <button className="checkoutButton">Checkout</button>
      </div>
  )
}

export default CartOrderSummery