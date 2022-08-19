import Products from "../products/products.component";
import { ProductsContext } from "../../context/products.context";
import { useContext } from "react";
import "./category-preview.style.scss";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

const CategoryPreview = () => {
  const { categories } = useContext(ProductsContext);

  const navigate = useNavigate();

  return (
    <div className="preview-container">
      <h1>OUR PRODUCTS</h1>
      {Object.keys(categories)
        .filter((c) => c !== "garden tools")
        .map((category) => {
          const items = categories[category];
          return (
            <div className="main-preview-container">
              <h2>{category}</h2>
              <div className="main-preview">
                <Products
                  products={items.filter((_, idx) => idx < 4)}
                  title={category}
                />
              </div>
              <Button
                buttonType="default"
                onClick={() => {
                  navigate(`/items/${category}`);
                }}
              >
                View All
              </Button>
            </div>
          );
        })}
    </div>
  );
};

export default CategoryPreview;
