import {
  AppBar,
  Container,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { BsYinYang, BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { MdOutlineExplore } from "react-icons/md";
import Category from "./Category";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f47ad",
    },
  },
});

const Navbar = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        style={{ margin: 0, borderBottom: "0.5px solid white" }}
      >
        <Container>
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
            <Typography
              variant="h6"
              component="div"
              sx={{
                margin: "10px",
                width: "fit-content",
                textAlign: "center",
              }}
            >
              {searchText !== "" ? `Search result: ${searchText}` : ""}
            </Typography>
            <SearchBar onSearch={handleSearch} />
            <Category />

            <IconButton
              color="inherit"
              onClick={() => {
                navigate("/course");
              }}
            >
              <MdOutlineExplore />
            </IconButton>
            <Link to={"/wishlist"} style={{ textDecoration: "none" }}>
              <IconButton style={{ color: "white" }}>
                <AiOutlineHeart />
              </IconButton>
            </Link>
            <Link to={"/cart"} style={{ textDecoration: "none" }}>
              <IconButton style={{ color: "white" }}>
                <BsCart />
              </IconButton>
            </Link>
            <DropdownMenu />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
