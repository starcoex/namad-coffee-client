import React from "react";
import { Outlet } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar, isLoggedInVar } from "./apollo";
import Login from "./components/users/Login";
import Logout from "./components/users/Logout";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/styles";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <React.StrictMode>
      <HelmetProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          {isLoggedIn ? <Login /> : <Logout />}
          <Outlet context={{ isLoggedIn }} />
        </ThemeProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
}

export default App;
