import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartToggle: false,
  setCartToggle: () => {},
  cartItems: [],
  addCartItems: () => {},
  itemsTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cartToggle, setCartToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsTotal, setItemsTotal] = useState(0);

  const addCartItems = (productToAdd) => {
    setCartItems(() => {
      const checkedItem = cartItems.find((item) => item.id === productToAdd.id);

      if (checkedItem) {
        return cartItems.map((item) =>
          item.id === checkedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...cartItems, { ...productToAdd, quantity: 1 }];
    });
  };

  useEffect(() => {
    setItemsTotal(() => {
      return cartItems.reduce((prev, current) => prev + current.quantity, 0);
    });
  }, [cartItems]);

  const value = {
    cartToggle,
    setCartToggle,
    cartItems,
    addCartItems,
    itemsTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
