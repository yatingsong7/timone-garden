import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/products.context";
import Products from "../products/products.component";
import "./category-items.style.scss";

const CategoryItems = () => {
  const { title } = useParams();
  const { categories } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {categories[title] && <Products products={categories[title]} />}
    </div>
  );
};

export default CategoryItems;
