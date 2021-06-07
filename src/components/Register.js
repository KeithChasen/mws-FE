import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { REGISTER } from '../graphql/auth';
import { AuthContext } from "../context/auth";

import { StyledFormWrapper, StyledForm, StyledInput, StyledButton, StyledError } from "../elements/Form";

const Register = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const initCredentials = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [credentials, setCredentials] = useState({
    ...initCredentials
  });

  const [errors, setErrors] = useState({});

  const [register, { data }] = useMutation(REGISTER);

  const onChange = e =>
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });

  const submitForm = e => {
    e.preventDefault();

    register({ variables: credentials })
      .then(res => {
        authContext.login(res.data.register);
        history.push('/');
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
        <h1>Register</h1>
        <label htmlFor="email">Email</label>
        <StyledInput type="email" name='email' error={errors.email} onChange={onChange}/>
        <StyledError>{errors.email}</StyledError>
        <label htmlFor="password">Password</label>
        <StyledInput type="password" name='password' error={errors.password} onChange={onChange}/>
        <StyledError>{errors.password}</StyledError>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <StyledInput type="password" name='confirmPassword' error={errors.confirmPassword} onChange={onChange}/>
        <StyledError>{errors.confirmPassword}</StyledError>
        <StyledButton>Register</StyledButton>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default Register;
