import React from "react";
import { Stack, Box } from "@mui/material";
import Header from "./Header";
import MainGrid from "./MainGrid";

// ...existing code...
const Dashboard = () => {
  return (
    <Box>
      <Header />
      <MainGrid />
    </Box>
  );
};

export default Dashboard;
