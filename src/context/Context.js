import React, { createContext, useReducer } from "react";
import randomFloat from "random-float";
import { LoremIpsum } from "lorem-ipsum";
import randomBool from "random-bool";
import images from "../products/images";
import { shopReducer } from "./Reducers";

const lorem = new LoremIpsum();
const ShopContext = createContext();

const capitalize = (words) => {
  let name = words.split(" ").map((word) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  });
  return name.join(" ");
};

const products = images.map((image, idx) => {
  return {
    id: idx,
    name: capitalize(lorem.generateWords(2)),
    image: image,
    price: randomFloat(2000, 9999).toFixed(2),
    description: lorem.generateSentences(2),
    inStock: randomBool({ likelihood: 80 }),
    gifts: randomBool(),
    sale: randomBool({ likelihood: 30 }),
    new: randomBool({ likelihood: 30 }),
    luxury: randomBool(),
    all: true,
  };
});
console.log("products", products);

const initialState = {
  products,
  cart: [],
  currentCategory: "all",
  totalPrice: 0,
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};

export default Context;
export { ShopContext };
