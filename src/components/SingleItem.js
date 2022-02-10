import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/Context.js";
import "../styles/SingleItem.scss";

const SingleItem = ({ item }) => {
  const { id, name, price, description, image, inStock, sale } = item;
  const { state, dispatch } = useContext(ShopContext);
  const [priceWithDiscount, setPriceWithDiscount] = useState(price);
  const [onhover, setOnhover] = useState(false);

  useEffect(() => {
    if (sale) {
      let newPrice = 0.7 * price;
      newPrice = Math.round(newPrice * 100) / 100;
      setPriceWithDiscount(newPrice);
    }
  }, [sale, price]);

  const isInCart = (id) => {
    return state.cart.some((item) => item.id === id);
  };

  const addToBag = (id, name, image, price) => {
    dispatch({ type: "addToBag", payload: { id, name, image, price } });
  };

  const removeFromBag = (id) => {
    dispatch({ type: "removeFromBag", payload: id });
  };

  return (
    <article
      className="item"
      onMouseEnter={() => setOnhover(true)}
      onMouseLeave={() => setOnhover(false)}
    >
      <p>{name}</p>
      {sale ? (
        <p>
          <span className="old-price">{price}</span>
          <span> {priceWithDiscount}</span>
        </p>
      ) : (
        <p>{price}</p>
      )}
      <p>{description}</p>
      <img src={image} alt="" />
      {isInCart(id) && onhover && (
        <button onClick={() => removeFromBag(id)}>Remove From Bag</button>
      )}
      {!isInCart(id) && onhover && inStock && (
        <button onClick={() => addToBag(id, name, image, priceWithDiscount)}>
          Add To Bag
        </button>
      )}
      {onhover && !inStock && <p>Out of stock</p>}
    </article>
  );
};

export default SingleItem;
