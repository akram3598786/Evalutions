import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuth, Setislogin] = React.useState(false);

  const Loginhandler = () => {
    Setislogin(isAuth ? false : true);
  }

  return <AuthContext.Provider value={{ isAuth, Loginhandler }}>
    {children}
  </AuthContext.Provider>;
};
