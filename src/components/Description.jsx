/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { MdLens } from "react-icons/md";

const Description = ({ courses }) => {
  return (
    <div style={{ padding: "10px", margin: "20px 0" }}>
      <Typography variant="h5" style={{ fontWeight: "bold", padding: "10px" }}>
        Mô tả
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ fontWeight: "bold", padding: "10px" }}
      >
        {courses.description.hello}
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ fontWeight: "bold", padding: "0 10px" }}
      >
        {courses.description.aboutTeacher}
      </Typography>
      <Box sx={{ flexGrow: 1 }} style={{ padding: "10px" }}>
        <Grid container spacing={1} direction="column">
          {courses.teacher.bio.map((info, index) => {
            return (
              <Grid xs={12} key={index}>
                <Typography
                  variant="subtitle1"
                  style={{ textAlign: "justify" }}
                >
                  {info}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Typography variant="subtitle1" style={{ padding: "0 10px" }}>
        {courses.teacher.subCertificates}
      </Typography>
      <Box sx={{ flexGrow: 1 }} style={{ padding: "10px" }}>
        <Grid container spacing={1} direction="column">
          {courses.teacher.certificates.map((certificate, index) => {
            return (
              <Grid xs={12} key={index}>
                <MdLens style={{ height: 8, margin: 2 }} />
                <Typography
                  variant="subtitle1"
                  style={{ display: "inline", textAlign: "justify" }}
                >
                  {certificate}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Typography
        variant="subtitle1"
        style={{ fontWeight: "bold", padding: "0 10px" }}
      >
        {courses.description.aboutCourse}
      </Typography>
      <Box sx={{ flexGrow: 1 }} style={{ padding: "10px" }}>
        <Grid container spacing={1} direction="column">
          {courses.description.targets.map((target, index) => {
            return (
              <Grid xs={12} key={index}>
                <Typography
                  variant="subtitle1"
                  style={{ textAlign: "justify" }}
                >
                  {target}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Typography variant="subtitle1" style={{ padding: "0 10px" }}>
        {courses.description.aboutObjectives}
      </Typography>
      <Box sx={{ flexGrow: 1 }} style={{ padding: "10px" }}>
        <Grid container spacing={1} direction="column">
          {courses.description.objectives.map((objective, index) => {
            return (
              <Grid xs={12} key={index}>
                <MdLens style={{ height: 8, margin: 2 }} />
                <Typography
                  variant="subtitle1"
                  style={{ display: "inline", textAlign: "justify" }}
                >
                  {objective}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Typography
        variant="subtitle1"
        style={{ fontWeight: "bold", padding: "0 10px" }}
      >
        {courses.description.subObjectivesTitle}
      </Typography>
      <Box sx={{ flexGrow: 1 }} style={{ padding: "10px" }}>
        <Grid container spacing={1} direction="column">
          {courses.description.subObjectives.map((subObjective, index) => {
            return (
              <Grid xs={12} key={index}>
                <Typography
                  variant="subtitle1"
                  style={{ textAlign: "justify" }}
                >
                  {subObjective}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Typography
        variant="subtitle1"
        style={{ fontWeight: "bold", padding: "0 10px" }}
      >
        {courses.description.contactTeacher}
      </Typography>
      <Typography variant="subtitle1" style={{ padding: "0 10px" }}>
        {courses.teacher.contact}
      </Typography>
    </div>
  );
};

export default Description;
