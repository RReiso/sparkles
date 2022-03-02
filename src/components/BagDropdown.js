import React, { useContext, useEffect, useState } from "react";
import "../styles/components/BagDropdown.scss";
import { ShopContext } from "../context/Context.js";

const BagDropdown = () => {
  const { state, dispatch } = useContext(ShopContext);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const total = state.cart
      .reduce((acc, item) => acc + Number(item.price), 0)
      .toFixed(2);
    setSubtotal(total);
  }, [state.cart]);

  const removeFromBag = (id) => {
    dispatch({ type: "removeFromBag", payload: id });
  };

  return (
    <div className="dropdown-content">
      {state.cart.length > 0 ? (
        <>
          {state.cart.map((item) => (
            <article className="dropdown-item" key={item.id}>
              <img src={item.image} alt={`${item.name}`} />
              <span>{item.name}</span>
              <span>CAD {item.price}</span>
              <span onClick={() => removeFromBag(item.id)}>
                <i className="circle fa fa-solid fa-times-circle"></i>
              </span>
            </article>
          ))}
          <p>Subtotal: {subtotal}</p>
        </>
      ) : (
        <p>Your bag is empty!</p>
      )}
    </div>
  );
};

export default BagDropdown;
