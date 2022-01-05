import React from 'react';
import StyledLink from "../../elements/StyledLink";

export const Desktop = ({user, logout}) => {
  const activeStyle = { color: 'grey' };
  const authLinks = user ? (
    <>
      <StyledLink nav={+true} to="/account">Account</StyledLink>
      <StyledLink nav={+true} to="/users">Users</StyledLink>
      <StyledLink nav={+true} to="/friends">Friends</StyledLink>
      <StyledLink nav={+true} to="/health">Health</StyledLink>
      <StyledLink nav={+true} to="/account" onClick={logout}>Logout</StyledLink>
    </>
  ) : (
    <>
      <StyledLink nav={+true} to="/login" activeStyle={activeStyle}>Login</StyledLink>
      <StyledLink nav={+true} to="/register" activeStyle={activeStyle}>Register</StyledLink>
    </>
  );

  return (
    <ul className="desktop-header">
      { authLinks }
    </ul>
  );
};
