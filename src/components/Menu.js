import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const activeStyle = { background: 'grey', color: 'black' };
  const styles = { margin: '10px' };

  return (<nav>
      <ul>
        <NavLink exact to="/" activeStyle={activeStyle} style={styles}>Home</NavLink>
        <NavLink to="/login" activeStyle={activeStyle} style={styles}>Login</NavLink>
        <NavLink to="/register" activeStyle={activeStyle} style={styles}>Register</NavLink>
      </ul>
    </nav>
  )
};

export default Menu;
