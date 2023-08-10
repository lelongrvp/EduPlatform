import { Route, Routes } from "react-router-dom";
import "./App.css";
import CoursePage from "./pages/CoursePage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<CoursePage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
