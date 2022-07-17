import "./shopping.style.scss";
import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";

const Shopping = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shopping-item-container">
      {products.map((item) => {
        return (
          <div className="item-card" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <div>{item.name}</div>
            <div>${item.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Shopping;
