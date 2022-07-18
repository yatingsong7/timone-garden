import Button from "../button/button.component";
import "./product.style.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const Product = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addCartItems } = useContext(CartContext);

  return (
    <div className="item-card">
      <img src={imageUrl} alt={name} />
      <div className="add-to-cart-button">
        <Button
          buttonType="default"
          onClick={() => {
            addCartItems(product);
          }}
        >
          Add to Cart
        </Button>
      </div>
      <div>{name}</div>
      <div>${price}</div>
    </div>
  );
};

export default Product;
