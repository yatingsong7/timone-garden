import { Route, Routes } from "react-router-dom";
import CategoryItems from "../components/category-items.component/category-items.component";

const ShopItems = () => {
  return (
    <Routes>
      <Route path=":title" element={<CategoryItems />} />
    </Routes>
  );
};

export default ShopItems;
