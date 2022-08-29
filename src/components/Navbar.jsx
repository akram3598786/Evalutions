import React from "react";
import { AuthContext } from "../context/AuthContext";
import {Link} from "react-router-dom";
import "./Navbar.module.css";

// use react-router Link or NavLink
// const Link = <a />;

function Navbar() {
  let { isAuth, Loginhandler } = React.useContext(AuthContext);

  return (
    <div className="Navlinks" data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">Home</Link>
      {/* <div> */}
      {isAuth ?
        <div>
       <span data-cy="navbar-cart-items-count">{/* count here */} Cart</span>
        <button onClick={() => {
          Loginhandler(false);
        }}>Logout</button></div>
        : <Link to="/Login" data-cy="navbar-login-logout-button">Login</Link>}
       {/* </div> */}
    </div>
  );
};

export default Navbar;
