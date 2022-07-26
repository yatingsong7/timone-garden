import { Route, Routes } from "react-router-dom";
// import Shopping from "../components/shopping/shopping.component";
import CategoryItems from "../components/category-items.component/category-items.component";

const ShopItems = () => {
  return (
    <Routes>
      <Route path=":title" element={<CategoryItems />} />
    </Routes>
  );
};

export default ShopItems;
