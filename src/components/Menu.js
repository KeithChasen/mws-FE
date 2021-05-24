import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from "../context/auth";

const Menu = () => {
  const { user, logout } = useContext(AuthContext);
  const activeStyle = { background: 'grey', color: 'black' };
  const styles = { margin: '10px' };

  const authLinks = user ? (
    <Link activeStyle={activeStyle} style={styles} onClick={logout}>Logout</Link>
    ) : (
      <>
        <NavLink to="/login" activeStyle={activeStyle} style={styles}>Login</NavLink>
        <NavLink to="/register" activeStyle={activeStyle} style={styles}>Register</NavLink>
      </>
  );

  return (
    <nav>
      <ul>
        <NavLink exact to="/" activeStyle={activeStyle} style={styles}>Home</NavLink>
        { authLinks }
      </ul>
    </nav>
  )
};

export default Menu;
