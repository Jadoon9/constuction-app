import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const SidebarItem = ({ icon, name }) => {
  return (
    <Stack direction="row" spacing={4}>
      {icon}
      <Typography>{name}</Typography>
    </Stack>
  );
};

export default SidebarItem;
