import shoppingItem from "../../shopping-item.json";
import "./shopping.style.scss";

const Shopping = () => {
  return (
    <div className="shopping-item-container">
      {shoppingItem.map((item) => {
        return (
          <div className="item-card" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <div>{item.name}</div>
            <div>${item.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Shopping;
