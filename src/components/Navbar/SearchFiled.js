import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const SearchFiled = () => {
  return (
    <>
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ width: "300px" }}
      />
      {/* <Autocomplete
        sx={{ width: "300px" }}
        id="free-solo-demo"
        freeSolo
        options={[]}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      /> */}
    </>
  );
};

export default SearchFiled;
