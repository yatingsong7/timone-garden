import "./shopping.style.scss";
import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import Product from "../product/product.component";

const Shopping = () => {
  const { categories } = useContext(ProductsContext);

  return (
    <div className="shopping-item-container">
      {Object.keys(categories).map((category) => {
        console.log(categories[category]);
        return (
          <Product
            key={categories[category].id}
            product={categories[category]}
          />
        );
      })}
    </div>
  );
};

export default Shopping;
