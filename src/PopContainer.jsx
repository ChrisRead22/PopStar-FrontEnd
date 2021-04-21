import React from 'react';
import PopCard from './PopCard';


const PopContainer = ({items, deleteItem, addItem}) => {
    console.log(items)

const allItems = items.map(item => {
    return <PopCard
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