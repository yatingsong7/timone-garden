import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/aboutus/aboutus.component";
import Homepage from "./components/homepage/homepage.component";
import Navigation from "./components/navigation/navigation.component";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;
