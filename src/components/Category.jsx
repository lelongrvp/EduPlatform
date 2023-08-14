import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { MdOutlineCategory } from "react-icons/md";

const Category = () => {
  const categories = [
    "Web",
    "Mobile",
    "Game",
    "Data Science",
    "Machine Learning",
    "AI",
    "Cloud Computing",
    "Cyber Security",
    "DevOps",
    "Blockchain",
    "IoT",
    "Other",
  ];
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "white" }}
      >
        <MdOutlineCategory />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ "& .MuiPaper-root": { backgroundColor: "#0f47ad" } }}
      >
        {categories.map((category, idx) => (
          <MenuItem key={idx} onClick={handleClose} sx={{ color: "white" }}>
            {category}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Category;
