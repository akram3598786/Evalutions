import React from "react";
import { AuthContext } from "../context/AuthContext";
import {CartContext} from "../context/CartContext";
import {Link} from "react-router-dom";
import "./Navbar-module.css";

// use react-router Link or NavLink
// const Link = <a />;

function Navbar() {
  let { isAuth, Loginhandler } = React.useContext(AuthContext);
   const {cartCount, handleCartUpdate} = React.useContext(CartContext)

  return (
    <div className="Navlinks" data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">Home</Link>
      {/* <div> */}
      {isAuth ?
        <div>
       <h4 data-cy="navbar-cart-items-count">{/* count here */} Cart : {cartCount}</h4>
        <link to="/Login" onClick={() => Loginhandler(false)}>Logout</link> </div>
        : <div>
          <h4 data-cy="navbar-cart-items-count">{/* count here */} Cart : {cartCount}</h4>
        <Link to="/Login" data-cy="navbar-login-logout-button">Login</Link>
        </div>}

    
    </div>
  );
};

export default Navbar;
