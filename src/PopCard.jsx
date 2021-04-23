import { useState } from 'react'
import React from 'react';
import "./PopCard.scss"
import PopCardDetails from './PopCardDetails'
import CancelIcon from '@material-ui/icons/Cancel';
import EditPopCard from './EditPopCard';

function PopCard ({id, name, description, price, image, deleteItem,updateItem,currentUser}) {
    //const { id } = useParams();
   
   
    function handleAddCart () {
        fetch(`http://localhost:3000/purchases`, { 
            method:'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: 1,
                item_id: id
            })

        }) .then(response => response.json())
           .then(response => console.log(response))
    }
   
    const CartButton = () => {
        
        
      
        
        
        return (
            <button onClick={handleAddCart}>Add to Cart</button>
        )
    }

    const [item, setItem] = useState({})
    const [updatedItem, setUpdatedItem] = useState(false);


    const handleDeleteClick = () => {
    
        fetch(`http://localhost:3000/items/${id}`, {
            method: "DELETE",
        });
        deleteItem(id);
}
    const handleClick = () => {
        
        console.log('clicked')
        setUpdatedItem(!updatedItem)
        
          
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
            {currentUser ?
                <span >
                    <button className="cart__button" onClick={handleClick}   >   Update </button>
                    <button className="delete__button" onClick={handleDeleteClick}>Remove</button>
                </span>
            : <CartButton/> }

            {/* <span><CancelIcon className="delete__button"/></span> */}
            {updatedItem ? <EditPopCard updateItem={updateItem} id={ id}/> : null}
            
    </div>
       
    )
}

   
 
export default PopCard;