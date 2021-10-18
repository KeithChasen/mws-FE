import React, { useContext } from 'react';
import { AuthContext } from "../../context/auth";
import Header from '../../elements/Header';
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

const Menu = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Header>
      <nav>
        <Desktop {...{ user, logout } } />
        <Mobile {...{ user, logout } } />
      </nav>
    </Header>
  )
};

export default Menu;
