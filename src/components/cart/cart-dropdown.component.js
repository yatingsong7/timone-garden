import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems, setCartToggle, cartToggle } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setCartToggle(!cartToggle);
    navigate("/checkout");
  };

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
        <Button buttonType="default" onClick={handleCheckout}>
          Check Out
        </Button>
      </div>
    </div>
  );
};

export default CartDropDown;
