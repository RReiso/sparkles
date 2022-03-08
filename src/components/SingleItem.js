import { useContext, useState, useEffect } from "react";
import ReactSparkle from "react-sparkle";
import { ShopContext } from "../context/Context.js";
import "../styles/components/SingleItem.scss";

const SingleItem = ({ item }) => {
  const { id, name, price, description, image, inStock, sale } = item;
  const { state, dispatch } = useContext(ShopContext);
  const [priceWithDiscount, setPriceWithDiscount] = useState(price);
  const [onHover, setOnHover] = useState(false);

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
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="item-info">
        <p style={{ fontWeight: "bolder" }}>{name}</p>
        <p>{description}</p>
        {sale ? (
          <p className="price">
            $ <span className="old-price">{price}</span>
            <spa style={{ color: "#d12064" }}> {priceWithDiscount}</spa>
          </p>
        ) : (
          <p className="price">${price}</p>
        )}
      </div>
      <div style={{ position: "relative" }}>
        {onHover && (
          <ReactSparkle
            color={"#ffffe0"}
            minSize={8}
            maxSize={15}
            fadeOutSpeed={25}
            overflowPx={0}
            flickerSpeed={"slowest"}
          />
        )}
        <img src={image} alt={`${name} - jewelery`} />
      </div>
      {isInCart(id) && (
        <button
          className="btn-warning btn-sm"
          onClick={() => removeFromBag(id)}
        >
          Remove From Bag
        </button>
      )}
      {!isInCart(id) && inStock && (
        <button
          className="btn-secondary btn-sm"
          onClick={() => addToBag(id, name, image, priceWithDiscount)}
        >
          Add To Bag
        </button>
      )}
      {!inStock && <p style={{ fontSize: "0.75rem" }}>Out of stock</p>}
    </article>
  );
};

export default SingleItem;
