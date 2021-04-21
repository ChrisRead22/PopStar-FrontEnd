import React from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  
  
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.kindpng.com/picc/m/238-2380777_michael-jackson-billie-jean-silhouette-michael-jackson-logo.png"
          alt="popstar"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav"></div>
      <Link to="/login">
      <div className="header__option">
        <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        </Link>
      <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">& Orders</span>
      </div>
      <Cart /> 
    </div>
  );
};

export default Header;
