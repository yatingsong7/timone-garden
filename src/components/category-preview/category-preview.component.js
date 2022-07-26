import Products from "../products/products.component";
import { ProductsContext } from "../../context/products.context";
import { useContext } from "react";
import "./category-preview.style.scss";
import Button from "../button/button.component";

const CategoryPreview = () => {
  const { categories } = useContext(ProductsContext);

  return (
    <div className="preview-container">
      <h1 className="preview-title">Our products</h1>
      {Object.keys(categories).map((category) => {
        const items = categories[category];
        return (
          <div className="main-preview-container">
            <h2>{category}</h2>
            <div className="main-preview">
              <Products products={items.filter((_, idx) => idx < 4)} />;
            </div>
            <Button buttonType="default">View All</Button>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPreview;
