import "./shopping.style.scss";
import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import Product from "../product/product.component";

const Shopping = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shopping-item-container">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shopping;
