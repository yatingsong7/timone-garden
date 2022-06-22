import Category from "../category/category.component";
import "./directory.style.scss";

const Directory = ({ category }) => {
  return (
    <div className="directory-container">
      {category.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </div>
  );
};
export default Directory;
