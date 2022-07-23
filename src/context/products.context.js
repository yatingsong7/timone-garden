import { createContext, useEffect, useState } from "react";
// import SHOP_DATA from "../shop-data.js";
import { addDocuments, getDocuments } from "../utils/firebase.utils";

export const ProductsContext = createContext({
  categories: [],
  setCategories: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const value = { categories };

  // useEffect(() => {
  //   const addCategoriesDocument = async () => {
  //     await addDocuments("categories", SHOP_DATA);
  //   };
  //   addCategoriesDocument();
  // });

  useEffect(() => {
    const getCategoriesDocuments = async () => {
      const categoriesMap = await getDocuments();
      setCategories(categoriesMap);
    };
    getCategoriesDocuments();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
