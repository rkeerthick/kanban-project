import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./page/AuthPage/AuthPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
