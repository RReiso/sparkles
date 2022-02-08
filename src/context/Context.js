import React, { createContext } from "react";

const Cart = createContext();

const Context = ({ children }) => {
  return <Cart.Provider value={0}>{children}</Cart.Provider>;
};

export default Context;
