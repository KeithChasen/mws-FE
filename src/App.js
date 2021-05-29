import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

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

function App() {
  return (
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
  );
}

export default App;
