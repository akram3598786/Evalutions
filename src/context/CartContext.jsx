import React, { createContext } from "react";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {


const [cartCount, setCartCount] = React.useState(0);

const handleCartUpdate = (val) => {
  setCartCount(cartCount + val);
};

  return <CartContext.Provider value={{ cartCount, handleCartUpdate }}>
    {children}
    </CartContext.Provider>;
};
