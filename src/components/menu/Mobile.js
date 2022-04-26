import React, { useState } from 'react';
import StyledLink from "../../elements/StyledLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";

export const Mobile = ({user, logout}) => {
  const activeStyle = { color: 'grey' };
  const [displayMenu, setDisplayMenu] = useState(false);

  const authLinks = user ? (
    <>
      <StyledLink nav={+true} to="/account" onClick={() => setDisplayMenu(false)} activeStyle={activeStyle}>
        Account
      </StyledLink>
      <StyledLink nav={+true} to="/account" onClick={() => { setDisplayMenu(false); logout(); }}>
        Logout
      </StyledLink>
      <StyledLink nav={+true} to="/users" onClick={() => setDisplayMenu(false)} activeStyle={activeStyle}>
        Users
      </StyledLink>
      <StyledLink nav={+true} to="/friends" onClick={() => setDisplayMenu(false)} activeStyle={activeStyle}>
        Friends
      </StyledLink>
      <StyledLink nav={+true} to="/sports" onClick={() => setDisplayMenu(false)} activeStyle={activeStyle}>
          Sports
      </StyledLink>
      <StyledLink nav={+true} to="/chat" onClick={() => window.location.href = '/chat'} activeStyle={activeStyle}>
        Chat
      </StyledLink>
    </>
  ) : (
    <>
      <StyledLink nav={+true} to="/login" onClick={() => setDisplayMenu(false)} activeStyle={activeStyle}>
        Login
      </StyledLink>
      <StyledLink nav={+true} to="/register" onClick={() => setDisplayMenu(false)} activeStyle={activeStyle}>
        Register
      </StyledLink>
    </>
  );

  const toggleBurgerLinks = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className="mobile-header">
      <div id="mobile-logo">
        <span>MWSKC</span>
      </div>
      <div className="mobile-header-background" style={{ display: displayMenu ? "block" : "none" }} onClick={() => setDisplayMenu(false)} />
      <div id="burgerLinks" style={{ display: displayMenu ? "block" : "none" }}>
        { authLinks }
      </div>
      <div className="icon" onClick={toggleBurgerLinks}>
        <FontAwesomeIcon icon={ displayMenu ? faWindowClose : faBars } color='white' size="10x" />
      </div>
    </div>
  );
};
