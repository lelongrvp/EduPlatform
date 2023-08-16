/* eslint-disable react/prop-types */
import {
  AppBar,
  IconButton,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";
import { BsYinYang, BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";
import { MdOutlineExplore } from "react-icons/md";
import Category from "./Category";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f47ad",
    },
  },
});

const Navbar = ({ courseData }) => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ margin: 0 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <BsYinYang />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 2 }}
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Edu Platform
          </Typography>
          <SearchBar courseData={courseData} />
          <Category />
          <Tooltip title="Browse">
            <IconButton
              color="inherit"
              onClick={() => {
                navigate("/course");
              }}
            >
              <MdOutlineExplore />
            </IconButton>
          </Tooltip>
          <Tooltip title="Wishlist">
            <IconButton
              style={{ color: "white" }}
              onClick={() => navigate("/wishlist")}
            >
              <AiOutlineHeart />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cart">
            <IconButton
              style={{ color: "white" }}
              onClick={() => navigate("/cart")}
            >
              <BsCart />
            </IconButton>
          </Tooltip>
          <DropdownMenu />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
