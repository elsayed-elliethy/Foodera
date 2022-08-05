import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import useHttp from "../../hooks/use-http";
import { Fragment, useEffect, useState } from "react";
import { manageCartActions } from "../../store/index1";
import React, { Component } from "react";
import Modal from "./Modal";
import { showCartActions } from "../../store/index1";
import CheckOut from "./CheckOut";
const Cart = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const cartItems = useSelector((state) => {
    return state.manageCart.items;
  });
  const dispatch = useDispatch();
  const closeCartHandler = () => {
    dispatch(showCartActions.closeCart());
  };
  const orderHandle = () => {
    setShowForm(true);
  };
  const orderClose = () => {
    setShowForm(false);
  };

  /////////////

  const { isLoading, error: err, requestFn: sendOrder } = useHttp();
  const submitFn = () => {
    setSubmitForm(true);
    // ctx.onClearMeals();
    dispatch(manageCartActions.clearCartItems());
  };
  const confirmOrderHandler = async (userData) => {
    sendOrder(
      {
        url: "https://foodera-10453-default-rtdb.firebaseio.com/orders.json",
        method: "POST",
        body: { user: userData, orderedItems: cartItems },
        headers: {
          "Content-Type": "application/json",
        },
      },
      submitFn
    );
  };
  ///////////

  let content = (
    <Fragment>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && (
        <p className={classes["no-meals"]}>No Meals Added</p>
      )}
      <ul className={classes.list}>
        {cartItems.map((ele) => {
          return (
            <CartItem
              key={ele.id}
              id={ele.id}
              title={ele.title}
              quantity={ele.quantity}
              price={ele.price}
            />
          );
        })}
      </ul>
      {showForm && (
        <CheckOut onFormClose={orderClose} onConfirm={confirmOrderHandler} />
      )}
      {!showForm && (
        <div className={classes.actions}>
          <button className={classes.close} onClick={closeCartHandler}>
            Close
          </button>
          {cartItems.length > 0 && (
            <button className={classes.order} onClick={orderHandle}>
              Order
            </button>
          )}
        </div>
      )}
    </Fragment>
  );

  if (err) {
    content = (
      <Fragment>
        <p>{err}</p>
        <div className={classes.actions}>
          <button className={classes.order} onClick={closeCartHandler}>
            Close
          </button>
        </div>
      </Fragment>
    );
  }
  if (isLoading) {
    content = <p>loading...</p>;
  }
  if (submitForm && !err && !isLoading) {
    content = (
      <Fragment>
        <p className={classes.success}>Your Order Has Been Sent</p>
        <div className={classes.actions}>
          <button className={classes.order} onClick={closeCartHandler}>
            Close
          </button>
        </div>
      </Fragment>
    );
  }

  return <Modal className={classes.cart}>{content}</Modal>;
};

export default Cart;
