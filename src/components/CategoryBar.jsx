import {
  AppBar,
  Button,
  Container,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f47ad",
    },
  },
});

const CategoryBar = () => {
  const categories = [
    "Web",
    "Mobile",
    "Game",
    "Data Science",
    "Machine Learning",
    "AI",
    "Cloud Computing",
    "Cyber Security",
  ];

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" style={{ margin: 0 }}>
        <Container maxWidth="x1">
          <Toolbar>
            {categories.map((category, idx) => (
              <Button key={idx} color="inherit">
                {category}
              </Button>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default CategoryBar;
