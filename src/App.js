import logo from "./logo.svg";
import "./App.scss";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import React, {useState,useEffect} from "react"
import Login from "./Login";
import NewItemForm from "./NewItemForm.jsx";
import SellerContainer from "./SellerContainer";
import PopContainer from "./PopContainer"
import SignupForm from "./SignupForm";


function App() {
  const [cart, setCart] = useState({})
  const [items, setItems] = useState([])
  //console.log(items)

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then(r => r.json())
      .then((itemArray) => {
        setItems(itemArray);
      });
  }, []);


  function addItem(newItem) {
    const updatedItemArray = [...items, newItem];
    setItems(updatedItemArray);
  }

  function deleteItem(id) {
    const updatedItemArray = items.filter((item) => item.id !== id);
    setItems(updatedItemArray);
  }

  function updateItem(updatedItem) {
    
    const updatedItemArray = Items.map((item) => {
      if (item.id === updatedItem.id) {
      return updatedItem;
      } else {
      return item;
      }
      });
      setItem(updatedItemArray);
  }
  
  return (
    <Router>
      <div className="App">
      
        
        <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/checkout">
          <Header />
         <Checkout />
      </Route>
          <Route path="/">
          <Header />
            <PopContainer items={items} deleteItem={deleteItem} addItem={addItem} updateItem={updateItem}/>
          
          {/* <NewItemForm addItem={handleNewItem}/> */}
      </Route>
      <SellerContainer />
      <SignupForm />
      {/* pass addItem in PopContainer */}
        </Switch>
      </div>
    </Router>
      
  );
}

export default App;
