import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { showCartActions } from "../../store/index1";
const Backdrop = (props) => {
  const dispatch = useDispatch();
  const closeCartHandler = () => {
    dispatch(showCartActions.closeCart());
  };
  return <div onClick={closeCartHandler} className={styles.backdrop}></div>;
};
const Overlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.onClose}></Backdrop>,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};
export default Modal;
