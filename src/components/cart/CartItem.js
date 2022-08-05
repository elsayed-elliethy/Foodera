import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { manageCartActions } from "../../store/index1";
const CartItem = (props) => {
  const CartItems = useSelector((state) => {
    return state.manageCart.items;
  });
  const dispatch = useDispatch();
  const addItemHandler = (event) => {
    const [meal] = CartItems.filter((ele) => {
      return ele.id === event.target.id;
    });
    dispatch(manageCartActions.addMeal({ val: meal }));
  };
  const removeItemHandler = (event) => {
    const [meal] = CartItems.filter((ele) => {
      return ele.id === event.target.id;
    });
    dispatch(manageCartActions.removeMeal({ val: meal }));
  };
  const { title, quantity, price, id } = props;
  const total = price * quantity;
  return (
    <li className={classes.item}>
      <div className="header">
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button id={id} onClick={removeItemHandler}>
            -
          </button>
          <button id={id} onClick={addItemHandler}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
