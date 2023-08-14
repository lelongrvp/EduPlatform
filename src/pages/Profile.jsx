import { Avatar, Typography, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <Avatar alt="User Avatar" src="/path-to-avatar-image.jpg" />
      <Typography variant="h4">Your Name</Typography>
      <Typography variant="body1">Web Developer using ReactJS 18</Typography>
      <Button variant="outlined" color="primary">
        Edit Profile
      </Button>
      <Footer />
    </div>
  );
};

export default Profile;
