import { Avatar, Typography, Button, Container, Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const profileStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  avatar: {
    width: "80px",
    height: "80px",
  },
  name: {
    marginTop: "10px",
    fontSize: "24px",
  },
  bio: {
    marginTop: "5px",
    textAlign: "center",
  },
  button: {
    marginTop: "10px",
  },
};

const Profile = () => {
  return (
    <Container>
      <Navbar />
      <Paper elevation={3} sx={profileStyles.root}>
        <Avatar
          sx={profileStyles.avatar}
          alt="User Avatar"
          src="/path-to-avatar-image.jpg"
        />
        <Typography variant="h4" sx={profileStyles.name}>
          Your Name
        </Typography>
        <Typography variant="body1" sx={profileStyles.bio}>
          Web Developer using ReactJS 18
        </Typography>
        <Button variant="outlined" color="primary" sx={profileStyles.button}>
          Edit Profile
        </Button>
      </Paper>
      <Footer />
    </Container>
  );
};

export default Profile;
