import { useNavigate } from "react-router-dom";
import "./category.style.scss";

const Category = ({ category }) => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate(`/items/${category.title.toLowerCase()}`);
  };

  return (
    <div className="category-container" onClick={handleShopNowClick}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h3>{category.title}</h3>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default Category;
