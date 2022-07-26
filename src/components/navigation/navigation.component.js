import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/plant-flower-outline-svgrepo-com.svg";
import CartIcon from "../cart/cart-icon.component";
import CartDropDown from "../cart/cart-dropdown.component";
import NavDropDown from "./nav-dropdown.component";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import "./navigation.style.scss";
import { signOutUser } from "../../utils/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartToggle } = useContext(CartContext);
  const [dropdownToggle, setDropdownToggle] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownToggle(!dropdownToggle);
  };

  return (
    <Fragment>
      <div className="nav-link-container">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <span className="nav-link nav-dropdown-container">
            <div onClick={handleDropdownToggle}>
              Shopping
              {dropdownToggle && <NavDropDown />}
            </div>
          </span>
          <Link className="nav-link" to="/aboutus">
            About Us
          </Link>
          {currentUser ? (
            <span className="nav-link auth-button" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link auth-button" to="/signin">
              Sign In
            </Link>
          )}
          <span className="nav-link">
            <CartIcon />
          </span>
        </div>
        {cartToggle && <CartDropDown />}
      </div>
    </Fragment>
  );
};

export default Navigation;
