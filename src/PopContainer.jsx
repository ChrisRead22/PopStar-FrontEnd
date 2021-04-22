import React from 'react';
import EditPopCard from './EditPopCard';
import NewItemForm from './NewItemForm';
import PopCard from './PopCard';


const PopContainer = ({items, deleteItem, addItem,currentUser,updateItem={updateItem}}) => {
    console.log(items)

const allItems = items.map(item => {
  return <PopCard
    updateItem={updateItem}
    currentUser={currentUser}
    deleteItem={deleteItem}
    addItem={addItem}
      key={item.id}
      id={item.id}
      name={item.name}
      image={item.image}
      description={item.description}
      price={item.price}
    />
  })
  return (
    
    <div className="home">
      <div className="home__container">
        {currentUser ?
          <NewItemForm addItem={addItem} />
          : ''}
        <img className="home__image" src="https://ar.al/2020/08/07/what-is-the-small-web/small-web-topology.jpg"></img>
        <div className="home__row">
         {allItems}
        </div>        
      </div>
    </div>
     
  );
}

// 
    
//     const allItems = items.map(item => {
//         return  <PopCard 
//         key={item.id}
//         id={item.id}
//         price={item.price}
//         image={item.image}
//         name={item.name}
//         description={item.description}
//         deleteItem={deleteItem} 
//         addItem={addItem}
//       />
//     }
//     return ( 
//         <>
//         {allItems}
//         </>
//     );
// }
 
export default PopContainer; 