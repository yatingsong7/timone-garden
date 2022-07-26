import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/products.context";
import "./nav-drowdown.style.scss";

const NavDropDown = () => {
  const { categories } = useContext(ProductsContext);

  return (
    <div className="nav-dropdown">
      {Object.keys(categories).map((title) => {
        return (
          <Link className="dropdown-link" to={`/items/${title}`}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavDropDown;
