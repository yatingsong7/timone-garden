import "./category.style.scss";

const Category = ({ category }) => {
  return (
    <div className="category-container">
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
