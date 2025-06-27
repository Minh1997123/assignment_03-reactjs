import CheckoutHeader from "../../component/Checkout/CheckoutHeader/CheckoutHeader";
import CheckoutTotal from "../../component/Checkout/CheckoutTotal/CheckoutTotal";
import CheckoutForm from "../../component/Checkout/CheckoutDetail/CheckoutForm";
import style from "./CheckoutPage.module.css";
const CheckoutPage = function () {
  return (
    <div className={style.checkoutpage}>
      <CheckoutHeader></CheckoutHeader>
      <h2>BILLING DETAILS</h2>
      <div className={style.content}>
        <CheckoutForm></CheckoutForm>
        <CheckoutTotal></CheckoutTotal>
      </div>
    </div>
  );
};
export default CheckoutPage;
