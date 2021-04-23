import React from "react";
import "./Home.scss";
import PopCard from "./PopCard";
import { Link } from "react-router-dom";




const Home = () => {
  return (
    <div className="landingpage">
        <h2>browse Pops?</h2>
                <Link to="/popContainer"> 
        <button>Browse Store</button>
        </Link> 
      <h2>sell pops?</h2>
                    < >
                        <button>Sell pops?</button>
                    </>
    </div>
  );
};

export default Home;
