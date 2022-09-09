import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
//  import { useNavigate } from "react-router-dom";

const Home = () => {

  let { isAuth, Loginhandler } = React.useContext(AuthContext);
  //  const navigate = useNavigate();
  //  React.useEffect(()=>{
  //   if(!isAuth) navigate("/Login");
  //  },[isAuth])

  console.log(isAuth)
  return <div>
    <Link to="/Products">Check All Products</Link>
    {isAuth ? 
    (
      <div>
      <h1>Home page</h1>
      <Link to="/Products">Check All Products</Link>
      </div>
    ) : <h1>Login First</h1>}
  
    
    </div>;
};

export default Home;
