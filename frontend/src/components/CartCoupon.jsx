import React from 'react'

const CartCoupon = ({coupon}) => {

  
  return (
      <div className="couponCode">
          <h2>Coupon:</h2>
          <input type="text" placeholder="Enter coupon code" />
          {
             coupon &&(
              <>
              
              <span>Coupon Code:</span>
              <p className="coupon-discount">{coupon.code}</p>
          </>
          )
          }
          
          <button className="applyCoupon">Apply Coupon</button>
      </div>
  )
}

export default CartCoupon