import React from "react";
import { useParams } from "react-router-dom";
import "./item-view.style.scss";

const ItemView = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="item-img-container">{id}</div>
      <div className="item-description-container">item description</div>
      <div>Review</div>
    </div>
  );
};

export default ItemView;
