import "./cart-item.style.scss";
const CartItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;

  return (
    <div className="cart-item">
      <img className="cart-item-img" src={imageUrl} alt={name} />
      <div className="cart-item-description">
        <div className="cart-item-name">{name}</div>
        <div className="cart-item-quantity">
          {quantity} x ${price} = $<em>{quantity * price}</em>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
