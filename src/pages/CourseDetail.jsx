/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const CourseDetail = ({ course }) => {
  const { id } = useParams();

  const selectedCourse = course.find((course) => course.id.toString() === id);

  if (!selectedCourse) {
    return (
      <div>
        <Navbar />
        <Typography variant="h3">Course not found</Typography>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Typography variant="h5" component="div">
        {selectedCourse.title}
      </Typography>
      <Typography variant="body2">{selectedCourse.description}</Typography>
      <Footer />
    </div>
  );
};
export default CourseDetail;
