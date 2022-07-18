import "./cart-dropdown.style.scss";
import Button from "../button/button.component";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">items</div>
      <div className="checkout-button">
        <Button buttonType="default">Check Out</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
