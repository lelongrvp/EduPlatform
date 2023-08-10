/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const CourseCard = (props) => {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        margin: "20px",
        background: "#e5e5e5",
        padding: 10,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={props.course.image}
        alt={props.course.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.course.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View more</Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
