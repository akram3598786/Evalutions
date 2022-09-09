import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // let navigate = useNavigate();

  const [isAuth, Setislogin] = React.useState(false);
  // if(!isAuth) navigate("/Login");

  const Loginhandler = () => {
    Setislogin(isAuth ? false : true);
  }

  return <AuthContext.Provider value={{ isAuth, Loginhandler }}>
    {children}
  </AuthContext.Provider>;
};
