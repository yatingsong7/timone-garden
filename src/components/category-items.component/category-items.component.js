import { useParams } from "react-router-dom";

const CategoryItems = ({ products }) => {
  const { title } = useParams();
  return (
    <>
      <h2>{title}</h2>
    </>
  );
};

export default CategoryItems;
