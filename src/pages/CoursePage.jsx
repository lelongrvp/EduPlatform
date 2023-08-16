/* eslint-disable react/prop-types */
import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import CourseCard from "../components/CourseCard";
import { useState } from "react";

const CoursePage = ({ course }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourse =
    selectedCategory === "All"
      ? course
      : course.filter((course) => course.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Typography variant="h4" style={{ textAlign: "center", marginTop: 20 }}>
        {selectedCategory}
      </Typography>
      <ButtonGroup
        variant="outlined"
        color="primary"
        aria-label="category selection"
        sx={{
          display: "flex",
          margin: "10px",
          justifyContent: "center",
        }}
      >
        <Button onClick={() => handleCategoryChange("All")}>All</Button>
        <Button onClick={() => handleCategoryChange("Front-end")}>
          Front-end
        </Button>
        <Button onClick={() => handleCategoryChange("Back-end")}>
          Back-end
        </Button>
        <Button onClick={() => handleCategoryChange("Video Game")}>
          Video Game
        </Button>
        <Button onClick={() => handleCategoryChange("Database")}>
          Database
        </Button>
        <Button onClick={() => handleCategoryChange("Mobile")}>Mobile</Button>
        <Button onClick={() => handleCategoryChange("DevOps")}>DevOps</Button>
      </ButtonGroup>
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
        {filteredCourse.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </Container>
    </>
  );
};

export default CoursePage;
