import React from "react";
import LayoutStyled from "./LayoutStyled";
import LoginPage from "../../pages/LoginPage/LoginPage";
import DashboardPage from "../../pages/DashboardPage/DashboardPage";

const Layout = () => {
  const isLogged = false;
  return (
    <LayoutStyled>
      {isLogged && <DashboardPage />}
      {isLogged || <LoginPage />}
    </LayoutStyled>
  );
};

export default Layout;
