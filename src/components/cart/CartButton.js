import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { showCartActions } from "../../store/index1";

const CartButton = (props) => {
  const total = useSelector((state) => {
    return state.manageCart.totalAmount;
  });
  const dispatch = useDispatch();
  const showCartHandler = () => {
    dispatch(showCartActions.openCart());
  };

  return (
    <button className={classes["cart-button"]} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
