import Button from "../button/button.component";
import "./products.style.scss";
import { useNavigate, useParams } from "react-router-dom";

const Products = ({ products }) => {
  const { title } = useParams();
  const navigate = useNavigate();

  return (
    <>
      {products.map((pro) => {
        const { imageUrl, name, price, id } = pro;
        return (
          <div
            className="item-card"
            key={id}
            onClick={() => {
              navigate("/items/" + title + "/" + id);
            }}
          >
            <img src={imageUrl} alt={name} />
            <div className="add-to-cart-button">
              {/* <Button
                buttonType="default"
                
              >
                Quick View
              </Button> */}
            </div>
            <div className="item-name">{name}</div>
            <div className="item-price">${price}</div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
