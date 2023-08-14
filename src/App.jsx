import { Route, Routes } from "react-router-dom";
import "./App.css";
import CoursePage from "./pages/CoursePage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CourseDetail from "./pages/CourseDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

const App = () => {
  const course = [
    {
      id: 1,
      title: "React",
      description:
        "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    {
      id: 2,
      title: "React Native",
      description:
        "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    {
      id: 3,
      title: "NodeJS",
      description:
        "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    },
    {
      id: 4,
      title: "ExpressJS",
      description:
        "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/220px-Expressjs.png",
    },
    {
      id: 5,
      title: "MongoDB",
      description:
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png",
    },
    {
      id: 6,
      title: "Spring Boot",
      description:
        "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can just run.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png",
    },
  ];

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        path="/course/:id"
        render={(props) => <CourseDetail {...props} />}
      />

      <Route path="/course" element={<CoursePage course={course} />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};

export default App;
