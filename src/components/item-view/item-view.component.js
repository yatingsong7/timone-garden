import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./item-view.style.scss";
import Button from "../button/button.component";
import { getItemDoc } from "../../utils/firebase.utils";
import { CartContext } from "../../context/cart.context";

const ItemView = () => {
  const { title, id } = useParams();
  const [item, setItem] = useState(null);
  const { addCartItems } = useContext(CartContext);
  useEffect(() => {
    const getDoc = async () => {
      const categoriesMap = await getItemDoc(title, id);
      setItem(categoriesMap);
    };
    getDoc();
  }, [id, title]);

  return (
    item && (
      <div className="item-container">
        <div className="item-description-container">
          <img src={item.imageUrl} alt="img" height="600px" width="400px" />

          <div className="item-description">
            <h1>{item.name}</h1>
            <h4>price: ${item.price}</h4>
            <p>Description:</p>
            <p>delivery: </p>
            <Button
              buttonType="default"
              onClick={() => {
                addCartItems(item);
              }}>
              Add to Cart
            </Button>
          </div>
        </div>
        <div className="item-review-container">
          <h2>Review</h2>
        </div>
      </div>
    )
  );
};

export default ItemView;
