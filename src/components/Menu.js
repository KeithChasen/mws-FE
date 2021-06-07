import React, { useContext } from 'react';

import { AuthContext } from "../context/auth";
import StyledLink from '../elements/StyledLink';
import Header from '../elements/Header';

const Menu = () => {
  const { user, logout } = useContext(AuthContext);
  const activeStyle = { color: 'grey' };

  const authLinks = user ? (
    <StyledLink to="/" onClick={logout}>Logout</StyledLink>
    ) : (
      <>
        <StyledLink to="/login" activeStyle={activeStyle}>Login</StyledLink>
        <StyledLink to="/register" activeStyle={activeStyle}>Register</StyledLink>
      </>
  );

  return (
    <Header>
      <nav>
        <ul>
          <StyledLink exact to="/" activeStyle={activeStyle}>Home</StyledLink>
          { authLinks }
        </ul>
      </nav>
    </Header>
  )
};

export default Menu;
