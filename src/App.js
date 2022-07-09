import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/aboutus/aboutus.component";
import Authentication from "./components/authentication/authentication.component";
import Homepage from "./components/homepage/homepage.component";
import Navigation from "./components/navigation/navigation.component";
import SignUp from "./components/sign-up/sign-up.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="signin" element={<Authentication />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;
