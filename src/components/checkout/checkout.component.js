import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "./checkout-item.component";
import "./checkout.style.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <h1>Check Out</h1>
      <div className="checkout-header-container">
        <div className="checkout-header">Product</div>
        <div className="checkout-header">Name</div>
        <div className="checkout-header">Price</div>
        <div className="checkout-header">Quantity</div>
        <div className="checkout-header">Item Total</div>
        <div className="checkout-header">Remove</div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Checkout;
