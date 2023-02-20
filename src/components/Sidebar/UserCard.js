import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

const UserCard = ({ avatar, name, designation }) => {
  return (
    <Stack marginTop={8} direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={avatar} />
      <Stack direction="column">
        <Typography variant="h6">{name}</Typography>
        <Typography variant="caption">{designation}</Typography>
      </Stack>
    </Stack>
  );
};

export default UserCard;
