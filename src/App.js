import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";

import { AuthProvider } from "./context/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
