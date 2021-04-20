import React from 'react';
import "./Checkout.scss"
import Subtotal from './Subtotal';
const Checkout = () => {
    return (
        <div className="checkout">
            
            <div className="checkout__left">
                <img src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/images/media/images/banner-ads-examples-ncino.jpg" alt="" className="checkout__ad" />
                
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Cart
                    </h2>
                </div>
            </div>

            <div className="checkout__right">
              <Subtotal />
            </div>
        </div>
     );
}
 
export default Checkout;