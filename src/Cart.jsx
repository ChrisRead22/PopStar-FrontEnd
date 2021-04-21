import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Cart = () => {




  
  return (
    <div className="cart">
      <Link to="/checkout">
        <div className="cart__optionBasket">
          <ShoppingBasketIcon />
          <span
            className="cart__optionLineTwo 
        header__basketCount"
          >
            0
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
