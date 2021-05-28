import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgot from "./components/Forgot";
import Menu from "./components/Menu";

import { AuthProvider } from "./context/auth";
import { AuthRoute } from "./utils/AuthRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <AuthRoute exact path="/forgot" component={Forgot} />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
