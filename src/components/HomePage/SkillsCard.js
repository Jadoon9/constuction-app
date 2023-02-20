import { Avatar, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const SkillsCard = ({ title, avatar, description }) => {
  return (
    <Paper sx={{ width: "200px", padding: "1rem" }}>
      <Stack direction="column" justifyContent="space-between" spacing={2}>
        <Stack direction="row" spacing={2} alignItems="flex-end">
          <Avatar alt="Remy Sharp" src={avatar} />
          <Typography>{description}</Typography>
        </Stack>
        <Typography>{title}</Typography>
      </Stack>
    </Paper>
  );
};

export default SkillsCard;
