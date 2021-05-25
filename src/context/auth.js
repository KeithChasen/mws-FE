import React, { createContext, useReducer } from 'react';
import jwtDecode from "jwt-decode";

const initState = {
  user: null
};

if (localStorage.getItem('token')) {
  const decodedToken = jwtDecode(localStorage.getItem('token'));

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('token');
  } else {
    initState.user = decodedToken;
  }
}

const AuthContext = createContext({
  user: null,
  login: userData => {},
  logout: () => {}
});

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

const AuthProvider = props => {
  const [state, dispatch] = useReducer(authReducer, initState);

  const login = userData => {
    localStorage.setItem('token', userData.token);
    dispatch({
      type: 'LOGIN',
      payload: userData
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({
      type: 'LOGOUT'
    });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout}} {...props} />
  );
};

export  { AuthContext, AuthProvider };
