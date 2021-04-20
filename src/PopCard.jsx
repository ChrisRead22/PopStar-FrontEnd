import React from 'react';
import "./PopCard.scss"
const PopCard = () => {
    return (
        <div className="card">
            <div className="card__info">
                <p> This will eventuall be a Pop card Title </p>
                <p className="card__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="card__rating">
                    <p>*</p>
                </div>
            </div>
            <img className="card__image" src="https://m.media-amazon.com/images/G/01/beauty/Gillette_4.17_DOTD._AC_SY480_.jpg" alt="" />
                
                <button className="cart__button">
                    Add To Cart
                </button>
                
        </div>
    );
}
 
export default PopCard;