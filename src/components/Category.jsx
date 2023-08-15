import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
import { MdOutlineCategory } from "react-icons/md";

const Category = () => {
  const categories = [
    "Front-end",
    "Back-end",
    "Video Game",
    "Database",
    "Mobile",
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
      <Tooltip title="Category">
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
      </Tooltip>
    </div>
  );
};

export default Category;
