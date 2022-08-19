import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/products.context";
import Products from "../products/products.component";
import "./category-items.style.scss";

const CategoryItems = () => {
  const { title } = useParams();
  const { categories } = useContext(ProductsContext);

  return (
    <div className="shop-category-container">
      <h1 className="category-header">{title}</h1>
      <input />
      {categories[title] && (
        <span className="products-total">
          {categories[title].length} products
        </span>
      )}

      <div className="products-container">
        {categories[title] && (
          <Products products={categories[title]} title={title} />
        )}
      </div>
    </div>
  );
};

export default CategoryItems;
