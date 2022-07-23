import "./shopping.style.scss";
import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import Product from "../product/product.component";

const Shopping = () => {
  const { categories } = useContext(ProductsContext);

  return (
    <div className="shopping-item-container">
      {categories &&
        categories.map((category) => {
          return <Product key={category.id} product={category} />;
        })}
    </div>
  );
};

export default Shopping;
