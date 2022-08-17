import { useContext, useState } from "react";
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
  const [myAccountToggle, setMyAccountToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(null);

  const categoryMouseMove = () => {
    setDropdownToggle(!dropdownToggle);
  };

  const myAccountMouseMove = () => {
    setMyAccountToggle(!myAccountToggle);
  };

  const searchMouseOn = () => {
    setSearchToggle("active");
  };

  return (
    <>
      <div className="nav-link-container">
        <h1 className="logo">TIMONE GARDEN</h1>

        <div className="search-box">
          <input
            className={searchToggle}
            placeholder="search a plant..."
            autoFocus
          />
          <i class="fas fa-search" onMouseOver={searchMouseOn}></i>
        </div>
        <div className="links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <span
            className="nav-link nav-dropdown-container"
            onMouseEnter={categoryMouseMove}
            onMouseLeave={categoryMouseMove}
          >
            <span className="nav-shopping">Category</span>
            {dropdownToggle && <NavDropDown />}
          </span>
          <Link className="nav-link" to="/aboutus">
            Services
          </Link>
          <Link className="nav-link" to="/aboutus">
            Contact Us
          </Link>
          {currentUser ? (
            <span
              className="my-account"
              onMouseEnter={myAccountMouseMove}
              onMouseLeave={myAccountMouseMove}
            >
              <img
                className="nav-link"
                src="user-icon.png"
                alt="account-icon"
              />
              {myAccountToggle && (
                <div className="nav-dropdown account-dropdown">
                  <span className="dropdown-link">My order</span>
                  <span className="dropdown-link">My wishlist</span>
                  <span className="dropdown-link">Settings</span>
                  <span className="nav-link auth-button" onClick={signOutUser}>
                    Sign Out
                  </span>
                </div>
              )}
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
    </>
  );
};

export default Navigation;
