import React, { createContext, useReducer } from 'react';
import jwtDecode from "jwt-decode";
import { authReducer } from "./reducers/auth";

const initState = {
  user: null
};

if (localStorage.getItem('token')) {
  const decodedToken = jwtDecode(localStorage.getItem('token'));

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('token');
    //todo: refresh token and re-authenticate
  } else {
    initState.user = {
      ...decodedToken,
      ...decodedToken._doc
    };
  }
}

const AuthContext = createContext({});

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

  const updateAccount = userData => {
    localStorage.setItem('token', userData.token);
    dispatch({
      type: 'UPDATE_ACCOUNT',
      payload: userData
    })
  };

  return (
    <AuthContext.Provider value={{ user: state?.user, login, logout, updateAccount }} {...props} />
  );
};

export  { AuthContext, AuthProvider };
