import { Route, Routes } from "react-router-dom";
import CategoryItems from "../components/category-items.component/category-items.component";
import ItemView from "../components/item-view/item-view.component";

const ShopItems = () => {
  return (
    <Routes>
      <Route path=":title/:id" element={<ItemView />} />
      <Route path=":title" element={<CategoryItems />} />
    </Routes>
  );
};

export default ShopItems;
