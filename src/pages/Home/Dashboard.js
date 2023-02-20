import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ProjectsList from "../../components/HomePage/ProjectsList";
import SkillsCard from "../../components/HomePage/SkillsCard";

const Dashboard = () => {
  return (
    <Stack direction="column">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <SkillsCard title="Active Skilled" description="10 NOS" />
        <SkillsCard title="Active Skilled" description="10 NOS" />
        <SkillsCard title="Active Skilled" description="10 NOS" />
        <SkillsCard title="Active Skilled" description="10 NOS" />
      </Stack>
      <Typography variant="h4" textAlign="center" sx={{ margin: "1rem" }}>
        Projects List
      </Typography>
      <ProjectsList />
    </Stack>
  );
};

export default Dashboard;
