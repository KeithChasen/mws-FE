import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import { UserProvider } from "./context/user";
import { FriendsProvider } from "./context/friends";

import './App.css';

import { AuthProvider } from "./context/auth";
import { AuthRoute } from "./utils/AuthRoute";
import { UnAuthRoute } from "./utils/UnAuthRoute";

import Menu from "./components/menu/Menu";

import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";
import Restore from "./components/Restore";
import Account from "./components/account/Account";
import UsersList from "./components/users/UsersList";
import User from "./components/users/UserPage";
import Chat from "./components/chat/Chat";
import Friends from "./components/friends/Friends";
import Health from "./components/health/Health";
import {HealthProvider} from "./context/health";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <FriendsProvider>
          <HealthProvider>
            <BrowserRouter>
              <Menu />
              <UnAuthRoute exact path="/" component={Account} />
              <UnAuthRoute exact path="/account" component={Account} />
              <UnAuthRoute exact path="/users" component={UsersList} />
              <UnAuthRoute exact path="/user/:id" component={User} />
              <UnAuthRoute exact path="/chat" component={Chat} />
              <UnAuthRoute exact path="/friends" component={Friends} />
              <UnAuthRoute exact path="/health" component={Health} />

              <AuthRoute exact path="/login" component={Login} />
              <AuthRoute exact path="/register" component={Register} />
              <AuthRoute exact path="/forgot" component={Forgot} />
              <AuthRoute exact path="/restore/:hash" component={Restore} />
            </BrowserRouter>
          </HealthProvider>
        </FriendsProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
