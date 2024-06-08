import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
const Cart = () => {
  return (
    <div className='cart_section'>
      <div className="carts">
        <div className="sm_header">
          <p>From Saved Addresses</p>
          <button>Enter Delivery Pincode</button>
        </div>
        <div className="cart_orders">
         {
          [1,1,1,1,1].map((item,index)=>{
            return(
              <div className="cart_products">
              <div className="left">
                <div className="image">
                  <img src="https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/w/z/j/x-fold3-pro-v2330-vivo-original-imahffy4ztpuhtad.jpeg?q=90" alt="" />
                  <div className="btns">
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                  </div>
                </div>
              </div>
              <div className="center">
                <div className="name">vivo X Fold3 Pro (Celestial Black, 512 GB)</div>
                <div className="seller">Seller:MYTHANGLORYRetail</div>
                <div className="price_box">
                  <div className="price">₹1,69,999</div>
                  <div className="original_price">₹1,59,999</div>
                   <div className="discount"> 5% Off</div>
                </div>
                <p>+ ₹99 Secured Packaging Fee</p>
                <div className="links">
                  <Link>SAVE FOR LATER</Link>    
                  <Link>REMOVE</Link>          
                  </div>
              </div>
              <div className="right">Delivery by Sat Jun 15 | ₹40Free</div>
              
            </div>
            )
          })
         }
        </div>
      </div>
      <div className="total_count">
        hi
      </div>
    </div>
  )
}

export default Cart