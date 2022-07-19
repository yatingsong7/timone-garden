import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/aboutus/aboutus.component";
import Checkout from "./components/checkout/checkout.component";
import HeaderAndFooterWrapper from "./components/header-footer-wrapper/header-footer-wrapper.component";
import Homepage from "./components/homepage/homepage.component";
import Shopping from "./components/shopping/shopping.component";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderAndFooterWrapper />}>
        <Route index element={<Homepage />} />
        <Route path="items" element={<Shopping />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
