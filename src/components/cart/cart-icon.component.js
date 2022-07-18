import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <ShoppingBag className="cart-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
