import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/Context.js";
import CartItem from "./CartItem.js";

const Cart = () => {
  const { state } = useContext(ShopContext);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = state.cart.reduce(
      (acc, item) => acc + Number(item.price) * item.quantity,
      0
    );
    setSubtotal(total);
  }, [state.cart]);

  useEffect(() => {
    setTax(subtotal * 0.13);
  }, [subtotal]);

  useEffect(() => {
    setTotal(subtotal + tax);
  }, [subtotal, tax]);

  return (
    <section className="order">
      {state.cart.length > 0 ? (
        <>
          {state.cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
          <div className="delivery-info">
            <p>
              <i className="fa fa-truck" aria-hidden="true"></i>Order will be
              shipped in 24 hours
            </p>
            <p>
              <i className="fa fa-calendar-check-o" aria-hidden="true"></i>Same
              day delivery available for orders before 12pm
            </p>
            <p>
              <i className="fa fa-gift" aria-hidden="true"></i>Gift options
              available
            </p>
          </div>
          <div className="summary">
            <h3>Summary</h3>
            <p>
              Subtotal:<span>{subtotal.toFixed(2)}</span>
            </p>
            <p>
              Tax: <span>{tax.toFixed(2)}</span>
            </p>
            <p>
              Order Total:<span>{total.toFixed(2)}</span>
            </p>
            <button>CHECKOUT</button>
          </div>
        </>
      ) : (
        <>
          <p>Your bag is currently empty</p>
          <Link to="/all">Start shopping</Link>
        </>
      )}
    </section>
  );
};

export default Cart;
