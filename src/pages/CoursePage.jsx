/* eslint-disable react/prop-types */
import { Container, Typography } from "@mui/material";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CoursePage = ({ course }) => {
  return (
    <>
      <Navbar />
      <Typography variant="h4" style={{ textAlign: "center", marginTop: 20 }}>
        All Course
      </Typography>
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
        {course.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default CoursePage;
