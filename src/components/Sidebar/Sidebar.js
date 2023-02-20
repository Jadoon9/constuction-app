import { Box, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import SidebarItem from "./SidebarItem";
import HomeIcon from "@mui/icons-material/Home";
import UserCard from "./UserCard";
const sidebarItems = [
  {
    id: 1,
    name: "Dashboard",
    Icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Timesheet",
    Icon: <HomeIcon />,
  },
  {
    id: 3,
    name: "Production",
    Icon: <HomeIcon />,
  },
  {
    id: 4,
    name: "Leaves",
    Icon: <HomeIcon />,
  },
  {
    id: 5,
    name: "Projects",
    Icon: <HomeIcon />,
  },
  {
    id: 6,
    name: "Resources Scheduling",
    Icon: <HomeIcon />,
  },
  {
    id: 7,
    name: "Info Portal",
    Icon: <HomeIcon />,
  },
  {
    id: 8,
    name: "Inbox",
    Icon: <HomeIcon />,
  },
  {
    id: 9,
    name: "Users",
    Icon: <HomeIcon />,
  },
];

const Sidebar = () => {
  return (
    <Paper
      sx={{
        width: "15vw",
        height: "100vh",
        padding: "1rem",
      }}
    >
      <Stack direction="column" spacing={4} justifyContent="space-between">
        <Typography variant="h2" textAlign="center">
          MuiApp
        </Typography>
        {sidebarItems?.map((item) => {
          return (
            <SidebarItem key={item.id} name={item.name} icon={item.Icon} />
          );
        })}
        <Box
          sx={{
            // marginTop: "10rem",
            justifyContent: "flex-end",
          }}
        >
          <UserCard name="Shahzeb" avatar="" designation="Project Manager" />
        </Box>
      </Stack>
    </Paper>
  );
};

export default Sidebar;
