import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/aboutus/aboutus.component";
import Homepage from "./components/homepage/homepage.component";
import Navigation from "./components/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Route>
    </Routes>
  );
};

export default App;
