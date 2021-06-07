import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components';

import './App.css';

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";
import Restore from "./components/Restore";

import Menu from "./components/Menu";

import { AuthProvider } from "./context/auth";
import { AuthRoute } from "./utils/AuthRoute";
import { UnAuthRoute } from "./utils/UnAuthRoute";

const theme = {
  red: '#de354c',
  brown: '#932432',
  blue: '#3c1874',
  black: '#283747',
  white: '#f3f3f3',
  grey: '#dce1e3'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <UnAuthRoute exact path="/" component={Home} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <AuthRoute exact path="/forgot" component={Forgot} />
        <AuthRoute exact path="/restore/:hash" component={Restore} />
      </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
