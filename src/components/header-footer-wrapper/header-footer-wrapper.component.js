import { Outlet } from "react-router-dom";
import Footer from "../footer/footer.component";
import Navigation from "../navigation/navigation.component";

const HeaderAndFooterWrapper = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default HeaderAndFooterWrapper;
