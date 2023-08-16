import { Avatar, Typography, Button } from "@mui/material";

const Profile = () => {
  return (
    <div>
      <Avatar alt="User Avatar" src="/path-to-avatar-image.jpg" />
      <Typography variant="h4">Your Name</Typography>
      <Typography variant="body1">Web Developer using ReactJS 18</Typography>
      <Button variant="outlined" color="primary">
        Edit Profile
      </Button>
    </div>
  );
};

export default Profile;
