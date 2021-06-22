import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components';

import { UserProvider } from "./context/user";

import './App.css';

import { AuthProvider } from "./context/auth";
import { AuthRoute } from "./utils/AuthRoute";
import { UnAuthRoute } from "./utils/UnAuthRoute";

import Menu from "./components/Menu";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";
import Restore from "./components/Restore";
import Account from "./components/account/Account";
import UsersList from "./components/users/UsersList";
import User from "./components/users/UserPage";
import Chat from "./components/chat/Chat";

const theme = {
  red: '#de354c',
  brown: '#932432',
  blue: '#3c1874',
  black: '#283747',
  white: '#f3f3f3',
  grey: '#dce1e3',
  green: '#164a41'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <Menu />
          <UnAuthRoute exact path="/" component={Home} />
          <UnAuthRoute exact path="/account" component={Account} />
          <UnAuthRoute exact path="/users" component={UsersList} />
          <UnAuthRoute exact path="/user/:id" component={User} />
          <UnAuthRoute exact path="/chat" component={Chat} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <AuthRoute exact path="/forgot" component={Forgot} />
          <AuthRoute exact path="/restore/:hash" component={Restore} />
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
