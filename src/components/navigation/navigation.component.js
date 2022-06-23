import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/plant-flower-outline-svgrepo-com.svg";
import "./navigation.style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-link-container">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="links-container">
          <Link className="nav-link" to="/aboutus">
            About Us
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
