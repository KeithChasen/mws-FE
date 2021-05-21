import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <nav>
    <ul>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </ul>
  </nav>
);

export default Menu;
