import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { LOGIN } from '../graphql/auth';
import { AuthContext } from "../context/auth";

import { useFriendsDispatch } from "../context/friends";

import { StyledFormWrapper, StyledForm, StyledInput, StyledButton, StyledError, StyledMessage } from "../elements/Form";
import StyledLink from "../elements/StyledLink";
import { useUserDispatch } from "../context/user";
import { useHealthDispatch } from "../context/health";

const Login = props => {
  const context = useContext(AuthContext);
  const history = useHistory();

  const dispatch = useFriendsDispatch();
  const usersDispatch = useUserDispatch();

  const healthDispatch = useHealthDispatch();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const [login, { loading }] = useMutation(LOGIN);

  useEffect(() => {
    if (props.location.error) {
      setErrors({ common: props.location.error });
    } else if (props.location.message) {
      setMessage(props.location.message);
    }
  }, [props.location.error, props.location.message]);

  const onChange = e => {
    setMessage('');
    setErrors({});
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
          dispatch({
            type: 'SET_FRIENDS',
            payload: res.data.login.friends
          });
          usersDispatch({
            type: 'SET_USERS',
            payload: undefined
          })
          healthDispatch({
              type: 'SET_HEALTH_DIARY',
              payload: undefined
          })
          history.push('/account');
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

  const content = loading ? (<div>Loading...</div>) : (
    <StyledForm onSubmit={submitForm}>
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
      <StyledInput type="email" name='email' error={errors.email} onChange={onChange}/>
      <StyledError>{errors.email}</StyledError>
      <label htmlFor="password">Password</label>
      <StyledInput type="password" name='password' error={errors.password} onChange={onChange}/>
      <StyledError>{errors.password}</StyledError>
      <StyledButton>Login</StyledButton>
      <StyledMessage>{message}</StyledMessage>
      <StyledError>{errors.common}</StyledError>
      <StyledLink to='/forgot'>Forgot Password?</StyledLink>
    </StyledForm>
  );

  return (
    <StyledFormWrapper>
      { content }
    </StyledFormWrapper>
  );
};

export default Login;
