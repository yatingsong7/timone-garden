import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.style.scss";

const CheckoutItem = ({ item }) => {
  const { id, imageUrl, name, quantity, price } = item;
  const { removeCartItems, addCartItems } = useContext(CartContext);

  const handleIncrement = (product) => {
    addCartItems(product);
  };

  const handleDecrement = (product) => {
    removeCartItems(product);
  };

  return (
    <div key={id} className="checkout-item-container">
      <img src={imageUrl} alt={name} className="checkout-item-img" />
      <h3 className="name">{name}</h3>
      <span className="price">{price}</span>
      <div className="quantity">
        <span onClick={() => handleDecrement(item)}> - </span>
        <span>{quantity}</span>
        <span onClick={() => handleIncrement(item)}> + </span>
      </div>
      <p className="item-total">{quantity * price}</p>
      <span className="remove-button"> x </span>
    </div>
  );
};

export default CheckoutItem;
