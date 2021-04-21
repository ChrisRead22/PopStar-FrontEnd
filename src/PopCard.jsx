import { useState } from 'react'
import React from 'react';
import "./PopCard.scss"
import PopCardDetails from './PopCardDetails'

function PopCard ({id, name, description, price, image, deleteItem, addItem}) {
    //const { id } = useParams();


    const [item, setItem] = useState({})
    console.log(id)

function handleClick () {
    console.log("clicked")

}

 function handleClickOnImage () {
    console.log("clicked")

        fetch(`http://localhost:3000/items/${id}`)
            .then(res => res.json())
            .then(res => renderCardDetails(res))
    }

    return(
        
        <div className="card">
            <PopCardDetails/>
        <div className="card__info">
            <p>{name}</p>
            <p className="card__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="card__rating">
                <p>*</p>
            </div>
        </div>
        <img className="card__image" onClick={handleClickOnImage} src={image} alt={name} />
            
            <button className="cart__button" onClick={handleClick}>Add To Cart </button>
            
    </div>
       
    )
}

   
 
export default PopCard;