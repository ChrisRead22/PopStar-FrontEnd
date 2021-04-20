import React from "react";
import "./Home.scss";
import PopCard from "./PopCard";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://ar.al/2020/08/07/what-is-the-small-web/small-web-topology.jpg"></img>

        <div className="home__row">
          
          <PopCard />
          <PopCard />
        </div>

        <div className="home__row">
          <PopCard />
          <PopCard />
          <PopCard />
        </div>

        <div className="home__row">      
          <PopCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
