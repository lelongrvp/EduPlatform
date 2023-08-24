/* eslint-disable react/prop-types */
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import {
  MdStarRate,
  MdPlayCircle,
  MdSupervisorAccount,
  MdVerified,
} from "react-icons/md";

const Teacher = ({ course, setShowTeacherDetails }) => {
  function handleClick(event) {
    //note that function and link was not definde
    event.preventDefault();
    setShowTeacherDetails(true);
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div id="teacher">
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Giảng viên
      </Typography>
      <Link
        underline="hover"
        key="1"
        color="inherit"
        href="/"
        onClick={handleClick}
        style={{
          marginLeft: 10,
          color: "#c0c4fc",
          textDecoration: "underline",
        }}
      >
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {course.teacher.name}
        </Typography>
      </Link>

      <Typography variant="h6">{course.teacher.role}</Typography>
      <Box sx={{ flexGrow: 1 }} style={{ padding: "10px" }}>
        <Grid container spacing={1} direction="row">
          <Grid xs={2}>
            <Link
              underline="hover"
              key="1"
              color="inherit"
              href="/"
              onClick={handleClick}
              style={{
                marginLeft: 10,
                color: "#c0c4fc",
                textDecoration: "underline",
              }}
            >
              <Avatar
                src={course.teacher.avatar}
                sx={{ width: 100, height: 100 }}
              />
            </Link>
          </Grid>
          <Grid xs={10}>
            <div>
              <MdStarRate />
              <Typography
                variant="subtitle1"
                style={{ display: "inline", marginLeft: 10 }}
              >
                {course.teacher.totalRateStar} xếp hạng giảng viên
              </Typography>
            </div>
            <div>
              <MdVerified />
              <Typography
                variant="subtitle1"
                style={{ display: "inline", marginLeft: 10 }}
              >
                {course.teacher.totalRate} đánh giá
              </Typography>
            </div>
            <div>
              <MdSupervisorAccount />
              <Typography
                variant="subtitle1"
                style={{ display: "inline", marginLeft: 10 }}
              >
                {course.teacher.totalStudents} học viên
              </Typography>
            </div>
            <div>
              <MdPlayCircle />
              <Typography
                variant="subtitle1"
                style={{ display: "inline", marginLeft: 10 }}
              >
                {course.teacher.totalcourse} khóa học
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="subtitle1">{course.teacher.exp}</Typography>
      <Typography variant="subtitle1">
        Language: {course.teacher.language.join(", ")}
      </Typography>
      <Typography variant="subtitle1">Certificates:</Typography>
      {course.teacher.certificates.map((c, index) => {
        return (
          <Typography
            variant="subtitle2"
            style={{ marginLeft: 20 }}
            key={index}
          >
            - {c}
          </Typography>
        );
      })}
      <Typography variant="subtitle1">{course.teacher.ability}</Typography>
    </div>
  );
};

export default Teacher;
