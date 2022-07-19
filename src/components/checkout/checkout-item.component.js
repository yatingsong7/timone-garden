import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.style.scss";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const { removeCartItems, addCartItems, clearItem } = useContext(CartContext);

  const handleIncrement = () => addCartItems(item);
  const handleDecrement = () => removeCartItems(item);
  const handleRemove = () => clearItem(item);

  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={name} className="checkout-item-img" />
      <h4 className="name">{name}</h4>
      <span className="price">${price}</span>
      <div className="quantity">
        <span onClick={handleDecrement} className="quantity-button">
          -
        </span>
        <span>{quantity}</span>
        <span className="quantity-button" onClick={handleIncrement}>
          +
        </span>
      </div>
      <span className="item-total">${quantity * price}</span>
      <span className="remove-button" onClick={handleRemove}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
