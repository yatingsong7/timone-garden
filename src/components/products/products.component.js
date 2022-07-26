import Button from "../button/button.component";
import "./products.style.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const Products = ({ products }) => {
  const { addCartItems } = useContext(CartContext);

  return (
    <>
      {products.map((pro) => {
        const { imageUrl, name, price, id } = pro;
        return (
          <div className="item-card" key={id}>
            <img src={imageUrl} alt={name} />
            <div className="add-to-cart-button">
              <Button
                buttonType="default"
                onClick={() => {
                  addCartItems(pro);
                }}
              >
                Add to Cart
              </Button>
            </div>
            <div className="item-name">{name}</div>
            <div className="item-price">${price}</div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
