import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-link-container">
        <div className="logo-container">
          <div>Logo</div>
        </div>
        <div className="links-container">
          <Link to="/aboutus">About Us</Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
