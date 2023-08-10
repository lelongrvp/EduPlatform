import {
  AppBar,
  Button,
  Container,
  IconButton,
  InputBase,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { BsYinYang } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f47ad",
    },
  },
});

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        style={{ margin: 0, borderBottom: "0.5px solid white" }}
      >
        <Container maxWidth="x1">
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
            <InputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
              sx={{ ml: 2, flex: 1 }}
            />

            <Button
              color="inherit"
              onClick={() => {
                navigate("/course");
              }}
            >
              Browse
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/profile");
              }}
            >
              My Account
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
