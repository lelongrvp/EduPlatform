/* eslint-disable react/prop-types */
import { InputBase, IconButton, Paper } from "@mui/material";
import { MdSearch } from "react-icons/md";
const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <InputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        onChange={handleSearch}
        fullWidth
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <MdSearch />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
