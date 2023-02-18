import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";
import { ReactComponent as LoginGraphic } from "../../assets/Mobile-login.svg";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <LoginGraphic />
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
