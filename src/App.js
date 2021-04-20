import logo from "./logo.svg";
import "./App.scss";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import React, {useState,useEffect} from "react"
import Login from "./Login";

function App() {
  const [cart, setCart] = useState({})
  
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
          <Home />
      </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
