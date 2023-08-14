/* eslint-disable react/prop-types */
import { Container, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { useLocation, useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();
  const location = useLocation();

  const courses = location.state.course;
  const selectedCourse = courses.find((course) => course.id === parseInt(id));

  return (
    <>
      <Navbar />
      <Container>
        {selectedCourse ? (
          <>
            <Typography variant="h2">{selectedCourse.title}</Typography>
            <Typography variant="body2">
              {selectedCourse.description}
            </Typography>
          </>
        ) : (
          <Typography variant="h2">Course Not Found</Typography>
        )}
      </Container>
    </>
  );
};

export default CourseDetail;
