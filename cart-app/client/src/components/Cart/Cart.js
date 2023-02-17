import React, { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartIcon from "./CartIcon";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [confrim, setConfirm] = useState(false);

  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoverHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const placeOrderHandler = () => {
    setConfirm(true);
  };
  const cancelConfirm = () => {
    setConfirm(false);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoverHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {confrim ? (
        <Checkout onCancel={cancelConfirm} onClose={props.onClose} />
      ) : (
        <div>
          <h1 className={classes.cartheader}>
            <span className={classes.icon}>
              <CartIcon />
            </span>
            My Cart
          </h1>
          {cartItems}
          {totalAmount > 0 ? (
            <div className={classes.total}>
              <span>Total Amount</span>
              <span>${totalAmount}</span>
            </div>
          ) : (
            <h1
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "1.5rem",
                margin: "3rem 5rem 4rem 5rem",
              }}
            >
              You don't have anything in your Cart!
            </h1>
          )}

          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              {totalAmount > 0 ? "Close" : "Back to Menu"}
            </button>
            {hasItems && (
              <button className={classes.button} onClick={placeOrderHandler}>
                Order
              </button>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
