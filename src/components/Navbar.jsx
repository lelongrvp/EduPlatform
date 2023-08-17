/* eslint-disable react/prop-types */
import {
  AppBar,
  Box,
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
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "inline-flex", alignItems: "center" }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <BsYinYang />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                maxWidth: "fit-content",
                flexGrow: 2,
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              Edu Platform
            </Typography>
          </Box>
          <Box sx={{ display: "inline-flex", alignItems: "center" }}>
            <SearchBar courseData={courseData} />
            <Tooltip title="Browse">
              <IconButton
                color="inherit"
                onClick={() => {
                  navigate("/course");
                }}
                sx={{ height: "fit-content", borderRadius: 0 }}
              >
                <MdOutlineExplore />
              </IconButton>
            </Tooltip>
            <Tooltip title="Wishlist">
              <IconButton
                style={{ color: "white" }}
                onClick={() => navigate("/wishlist")}
                sx={{ height: "fit-content", borderRadius: 0 }}
              >
                <AiOutlineHeart />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cart">
              <IconButton
                style={{ color: "white" }}
                onClick={() => navigate("/cart")}
                sx={{ height: "fit-content", borderRadius: 0 }}
              >
                <BsCart />
              </IconButton>
            </Tooltip>
            <DropdownMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
