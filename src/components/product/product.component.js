import Button from "../button/button.component";
import "./product.style.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const Product = ({ product }) => {
  const { addCartItems } = useContext(CartContext);
  console.log(product);
  return (
    <div className="item-card">
      {product.map((pro) => {
        const { imageUrl, name, price } = pro;
        return (
          <>
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
          </>
        );
      })}
    </div>
  );
};

export default Product;
