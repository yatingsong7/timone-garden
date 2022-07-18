import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <i className="empty-warning">Your cart is empty</i>
        )}
      </div>
      <div className="checkout-button">
        <Button buttonType="default">Check Out</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
