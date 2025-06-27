import style from "./Button.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../store/Slice";
const Button = function (props) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const itemDetail = props.data;
  // ham tang so luong them 1
  const incrementHandler = function () {
    setQuantity((pre) => pre + 1);
  };
  // ham giam so luong di 1
  const decrementHadler = function () {
    if (quantity <= 1) {
      return;
    }
    setQuantity((pre) => pre - 1);
  };
  //set so luong san pham
  const setQuantityHandler = function (event) {
    const number = event.target.value;
    if (number < 1) {
      setQuantity(1);
      return;
    }
    setQuantity(number);
  };
  const addCartHandler = function () {
    const item = {
      data: itemDetail,
      quantity: Number(quantity),
    };
    dispatch(addCart(item));
  };
  return (
    <div className={style.button}>
      <div className={style.button__quanity}>
        <input
          type="number"
          placeholder="QUANTITY"
          onChange={setQuantityHandler}
          min={1}
        ></input>
        <button onClick={decrementHadler}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
          </svg>
        </button>
        <span>{quantity}</span>
        <button onClick={incrementHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
          </svg>
        </button>
      </div>
      <button onClick={addCartHandler}>ADD TO CARD</button>
    </div>
  );
};
export default Button;
