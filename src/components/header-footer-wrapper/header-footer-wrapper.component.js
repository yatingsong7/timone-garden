import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer.component";
import Navigation from "../navigation/navigation.component";

const HeaderAndFooterWrapper = () => {
  return (
    <Fragment>
      <Navigation />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default HeaderAndFooterWrapper;
