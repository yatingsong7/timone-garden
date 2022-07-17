import "./product.style.scss";

const Product = ({ product }) => {
  const { imageUrl, name, price } = product;

  return (
    <div className="item-card">
      <img src={imageUrl} alt={name} />
      <div>{name}</div>
      <div>${price}</div>
    </div>
  );
};

export default Product;
