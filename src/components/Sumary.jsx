/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import { MdInfo, MdLanguage } from "react-icons/md";
import IntToStars from "./IntToStars";
import "./Sumary.css";

const Sumary = ({ course }) => {
  return (
    <div className="course-sumary">
      <Typography variant="h4" style={{ fontWeight: "bold", color: "inherit" }}>
        {course.title}
      </Typography>
      <Typography variant="h6" color="inherit">
        {course.namevi}
      </Typography>
      <Typography variant="subtitle1">
        <span
          style={{
            backgroundColor: "rgb(236,235,152)",
            color: "black",
            fontWeight: "bold",
            padding: "5px 7px",
          }}
        >
          Bestsellers
        </span>
        <span style={{ color: "#f69c08", margin: "0 10px" }}>
          {course.rate}
          <IntToStars int={course.rate} />
          <a
            href="#teacher"
            style={{
              marginLeft: 10,
              color: "yellow",
              textDecoration: "underline",
            }}
          >
            ({course.rateTime} rating)
          </a>
          <span style={{ color: "white" }}>
            {" "}
            {course.totalStudent} students
          </span>
        </span>
      </Typography>
      <Typography variant="subtitle1" color="inherit">
        Created by:
        <a
          href="#teacher"
          style={{
            marginLeft: 10,
            color: "yellow",
            textDecoration: "underline",
          }}
        >
          {course.teacher.name}
        </a>
      </Typography>
      <Typography variant="subtitle1" color="inherit">
        <span style={{ marginRight: 20 }}>
          <MdInfo />
          Most recent update: {course.updateAt}
        </span>
        <span>
          <MdLanguage />
          {course.language}
        </span>
      </Typography>
    </div>
  );
};

export default Sumary;
