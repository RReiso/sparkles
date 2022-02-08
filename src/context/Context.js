import React, { createContext, useReducer } from "react";
import randomFloat from "random-float";
import { LoremIpsum } from "lorem-ipsum";
import randomBool from "random-bool";
import images from "../products/images";
import { cartReducer } from "./Reducers";

const lorem = new LoremIpsum();
const CartContext = createContext();

const products = images.map((image, idx) => {
  return {
    id: idx,
    name: lorem.generateWords(2),
    image: image,
    price: randomFloat(1000, 5000).toFixed(2),
    description: lorem.generateSentences(2),
    gifts: randomBool(),
    sale: randomBool({ likelihood: 30 }),
    new: randomBool({ likelihood: 30 }),
    luxury: randomBool(),
    all: true,
  };
});

const initialState = {
  products,
  cart: [],
  currentCategory: "all",
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;
export { CartContext };
