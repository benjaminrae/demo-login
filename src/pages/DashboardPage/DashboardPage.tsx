import React from "react";
import DashboardPageStyled from "./DashboardPageStyled";
import Button from "../../components/Button/Button";

const DashboardPage = () => {
  const name = "User";

  return (
    <DashboardPageStyled>
      <h1>Dashboard</h1>
      <span>Welcome, {name}! You are now logged in</span>
      <Button>Logout</Button>
    </DashboardPageStyled>
  );
};

export default DashboardPage;
