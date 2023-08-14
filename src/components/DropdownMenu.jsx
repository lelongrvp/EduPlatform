import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ "& .MuiPaper-root": { backgroundColor: "#0f47ad" } }}
      >
        <Link to={"/profile"} style={{ textDecoration: "none" }}>
          <MenuItem onClick={handleClose} sx={{ color: "white" }}>
            Profile
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose} sx={{ color: "white" }}>
          Library
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: "white" }}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
