import { Stack } from "@mui/system";
import React from "react";
import SkillsCard from "../../components/HomePage/SkillsCard";

const Dashboard = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <SkillsCard title="Active Skilled" description="10 NOS" />
      <SkillsCard title="Active Skilled" description="10 NOS" />
      <SkillsCard title="Active Skilled" description="10 NOS" />
      <SkillsCard title="Active Skilled" description="10 NOS" />
    </Stack>
  );
};

export default Dashboard;
