import { useState } from "react";
import CategoryBar from "../components/CategoryBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import { Button, Container } from "@mui/material";

const Home = () => {
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

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <Navbar />
      <CategoryBar />
      <Container
        maxWidth="x1"
        sx={{ mt: 2 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {showMore
          ? course.map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))
          : course
              .slice(0, 3)
              .map((course, idx) => <CourseCard key={idx} course={course} />)}
      </Container>
      {showMore ? (
        <Button onClick={handleShowMore} style={{ left: "50%" }}>
          Show Less
        </Button>
      ) : (
        <Button onClick={handleShowMore}>Show More</Button>
      )}
      <Footer />
    </div>
  );
};

export default Home;
