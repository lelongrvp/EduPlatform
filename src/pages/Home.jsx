/* eslint-disable react/prop-types */
import { useState } from "react";
import CourseCard from "../components/CourseCard";
import Slider from "../components/Slider";
import { Button, Container, Typography } from "@mui/material";

const Home = (props) => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <Typography variant="h4" align="center" sx={{ mt: 2 }}>
        Welcome to Edu Platform
      </Typography>
      <Slider />
      <Container
        maxWidth="x1"
        sx={{ mt: 2 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {showMore
          ? props.course.map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))
          : props.course
              .slice(0, 3)
              .map((course, idx) => <CourseCard key={idx} course={course} />)}
      </Container>
      {showMore ? (
        <Button
          onClick={handleShowMore}
          style={{ width: "fit-content", left: "50%" }}
        >
          Show Less
        </Button>
      ) : (
        <Button
          onClick={handleShowMore}
          style={{ width: "fit-content", left: "50%" }}
        >
          Show More
        </Button>
      )}
    </div>
  );
};

export default Home;
