/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import { MdInfo, MdLanguage } from "react-icons/md";
import IntToStars from "./IntToStars";
import "./Sumary.css";

const Sumary = ({ courses }) => {
  return (
    <div className="courses-sumary">
      <Typography variant="h4" style={{ fontWeight: "bold", color: "inherit" }}>
        {courses.name}
      </Typography>
      <Typography variant="h6" color="inherit">
        {courses.namevi}
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
          {courses.rate}
          <IntToStars int={courses.rate} />
          <a
            href="#teacher"
            style={{
              marginLeft: 10,
              color: "yellow",
              textDecoration: "underline",
            }}
          >
            ({courses.rateTime} rating)
          </a>
          <span style={{ color: "white" }}>
            {" "}
            {courses.totalStudent} students
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
          {courses.teacher.name}
        </a>
      </Typography>
      <Typography variant="subtitle1" color="inherit">
        <span style={{ marginRight: 20 }}>
          <MdInfo />
          Most recent update: {courses.updateAt}
        </span>
        <span>
          <MdLanguage />
          {courses.language}
        </span>
      </Typography>
    </div>
  );
};

export default Sumary;
