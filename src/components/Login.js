import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { LOGIN } from '../graphql/auth';
import { AuthContext } from "../context/auth";

import { StyledFormWrapper, StyledForm, StyledInput, StyledButton, StyledError } from "../elements/Form";
import StyledLink from "../elements/StyledLink";

const Login = () => {
  const context = useContext(AuthContext);
  const history = useHistory();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

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
    <StyledFormWrapper>
      <StyledForm onSubmit={submitForm}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <StyledInput type="email" name='email' error={errors.email} onChange={onChange}/>
        <StyledError>{errors.email}</StyledError>
        <label htmlFor="password">Password</label>
        <StyledInput type="password" name='password' error={errors.password} onChange={onChange}/>
        <StyledError>{errors.password}</StyledError>
        <StyledButton>Login</StyledButton>
        <StyledError>{errors.common}</StyledError>
        <div>
          <StyledLink to='/forgot'>Forgot Password?</StyledLink>
        </div>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default Login;
