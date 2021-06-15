import React, { useContext } from 'react';

import { AuthContext } from "../context/auth";
import StyledLink from '../elements/StyledLink';
import Header from '../elements/Header';

const Menu = () => {
  const { user, logout } = useContext(AuthContext);
  const activeStyle = { color: 'grey' };

  const authLinks = user ? (
    <>
      <StyledLink nav={+true} to="/account">Account</StyledLink>
      <StyledLink nav={+true} to="/" onClick={logout}>Logout</StyledLink>
    </>
    ) : (
      <>
        <StyledLink nav={+true} to="/login" activeStyle={activeStyle}>Login</StyledLink>
        <StyledLink nav={+true} to="/register" activeStyle={activeStyle}>Register</StyledLink>
      </>
  );

  return (
    <Header>
      <nav>
        <ul>
          <StyledLink nav={+true} exact to="/" activeStyle={activeStyle}>Home</StyledLink>
          { authLinks }
        </ul>
      </nav>
    </Header>
  )
};

export default Menu;
