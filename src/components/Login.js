import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { LOGIN } from '../graphql/auth';
import { AuthContext } from "../context/auth";

const Login = () => {
  const context = useContext(AuthContext);
  const history = useHistory();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const errorStyle = { border: '1px solid red'};

  const [login, { data }] = useMutation(LOGIN);

  const onChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    login({ variables: credentials })
      .then(res => {
        if (res.data.login.token) {
          localStorage.setItem('token', res.data.login.token);
          context.login(res.data.login);
          history.push('/');
        } else {
          setErrors({
            ...errors,
            common: 'Something went wrong'
          })
        }
      })
      .catch(errors => {
        setErrors({
          ...errors.graphQLErrors[0].extensions.errors
        })
      })
  };

  return (
    <div>
      <h1>
        Login
      </h1>
      <form onSubmit={submitForm}>
        <input type="email" name='email' style={errors.email ? errorStyle : null} onChange={onChange}/>
        <p style={{color: 'red'}}>{errors.email}</p>
        <input type="password" name='password' style={errors.password ? errorStyle : null} onChange={onChange}/>
        <p style={{color: 'red'}}>{errors.password}</p>
        <button>Login</button>
        <p style={{color: 'red'}}>{errors.common}</p>
      </form>
    </div>
  );
}

export default Login;
