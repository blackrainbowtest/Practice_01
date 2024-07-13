import { useState } from "react";
import { Box, IconButton, Input } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchComponent() {
  const [text, setText] = useState("");

  const searchClickHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Input
        size="normal"
        label="Outlined"
        variant="standart"
        disableUnderline={true}
        endAdornment={
          <IconButton aria-label="search" size="small" color="primary" onClick={searchClickHandler}>
            <SearchIcon fontSize="inherit" size="large"/>
          </IconButton>
        }
        sx={{
          border: "1px solid gray",
          borderRadius: "50px",
          paddingLeft: "15px"
        }}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </Box>
  );
}
