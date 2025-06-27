import style from "./CheckoutForm.module.css";
import { Form } from "react-router";
const CheckoutForm = function () {
  return (
    <Form className={style.form}>
      <label htmlFor="Full-Name">FULL NAME</label>
      <input
        type="text"
        id="Full-Name"
        name="Full-Name"
        placeholder="Enter Your Full Name Here!"
        required
      />
      <label htmlFor="Eamil">EMAIL</label>
      <input
        type="email"
        name="Eamil"
        id="Eamil"
        placeholder="Enter Your Email Here!"
        required
      />
      <label htmlFor="Phone">PHONE NUMBER</label>
      <input
        type="number"
        id="Phone"
        name="Phone"
        placeholder="Enter Your Phone Number Here!"
        required
      />
      <label htmlFor="Address">ADDRESS</label>
      <input
        type="text"
        id="Address"
        name="Address"
        placeholder="Enter Your Address Here!"
        required
      />
      <button>Place order</button>
    </Form>
  );
};
export default CheckoutForm;
