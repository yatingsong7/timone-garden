import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { cartToggle, setCartToggle, itemsTotal } = useContext(CartContext);
  const handleCartToggle = () => setCartToggle(!cartToggle);

  return (
    <div className="cart-icon-container" onClick={handleCartToggle}>
      <ShoppingBag className="cart-icon" />
      <span className="item-count">{itemsTotal}</span>
    </div>
  );
};

export default CartIcon;
