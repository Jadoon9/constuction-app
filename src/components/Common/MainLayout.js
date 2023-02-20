import { Paper } from "@mui/material";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <Paper sx={{ height: "100vh", width: "80vw", padding: "1rem" }}>
      {children}
    </Paper>
  );
};

export default MainLayout;
