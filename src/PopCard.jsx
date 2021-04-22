import { useState } from 'react'
import React from 'react';
import "./PopCard.scss"
import PopCardDetails from './PopCardDetails'
import CancelIcon from '@material-ui/icons/Cancel';

function PopCard ({id, name, description, price, image, deleteItem,updateItem}) {
    //const { id } = useParams();


    const [item, setItem] = useState({})
    const [updatedItem, setUpdatedItem] = useState(item);

function handleUpdateClick () {
    fetch(`http://localhost:3000/items/${id}`, {
           method: "PATCH",
           headers: {
            "Content-Type": "application/json",
           },
           body: JSON.stringify({ item: updatedItem }),
          })
           .then((r) => r.json())
           .then((updatedItem) => {
        setUpdatedItem(updatedItem);
           });
}
    const handleDeleteClick = () => {
    
        fetch(`http://localhost:3000/items/${id}`, {
            method: "DELETE",
        });
        deleteItem(id);
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
        <img className="card__image"  src={image} alt={name} />
            
            <span>
                <button className="cart__button" onClick={handleUpdateClick}> Update </button>
                <button className="delete__button" onClick={handleDeleteClick}>Remove</button>
            </span>

            {/* <span><CancelIcon className="delete__button"/></span> */}
            
            
    </div>
       
    )
}

   
 
export default PopCard;