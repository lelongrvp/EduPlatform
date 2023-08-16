/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const CourseDetail = ({ course }) => {
  const { id } = useParams();

  const selectedCourse = course.find((course) => course.id.toString() === id);

  if (!selectedCourse) {
    return (
      <div>
        <Typography variant="h3">Course not found</Typography>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h5" component="div">
        {selectedCourse.title}
      </Typography>
      <Typography variant="body2">{selectedCourse.description}</Typography>
    </div>
  );
};
export default CourseDetail;
