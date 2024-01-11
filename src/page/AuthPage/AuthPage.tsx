import React, { useState } from "react";
import { Stack, Button } from "@mui/material";

import Logo from "../../assets/Logo/Logo";
import InputElement from "../../components/InputElement/InputElement";
import theme from "../../theme";
import { AuthContainer, LinkText, LogoDescription } from "./style";
import { AuthDataType } from "./type";

const data: AuthDataType[] = [
  {
    placeholder: "Email",
    value: "",
  },
  {
    placeholder: "Password",
    value: "",
  },
];

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleIsLogin = () => {
    setIsLogin((prev: boolean) => !prev);
  };

  return (
    <AuthContainer theme={theme}>
      <Stack
        marginBottom={6}
        spacing={4}
        alignItems="center"
        textAlign="center"
      >
        <Logo />
        <LogoDescription>
          Visualize Your Workflow for Increased Productivity.
          <br />
          Access Your Tasks Anytime, Anywhere
        </LogoDescription>
      </Stack>
      <Stack spacing={2}>
        {data.map((item: AuthDataType) => (
          <InputElement placeholder={item.placeholder} value={item.value} />
        ))}
        <Button size="large" variant="contained">
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </Stack>
      <LinkText onClick={handleIsLogin}>
        {isLogin
          ? "Do not have an account?"
          : "Log in to your existing account..."}
      </LinkText>
    </AuthContainer>
  );
};

export default AuthPage;
