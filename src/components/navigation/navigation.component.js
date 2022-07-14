import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/plant-flower-outline-svgrepo-com.svg";
import { UserContext } from "../../context/user.context";
import "./navigation.style.scss";
import { signOutUser } from "../../utils/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          <Link className="nav-link" to="/aboutus">
            About Us
          </Link>
          {currentUser ? (
            <span className="nav-link sign-in" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link sign-in" to="/signin">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;