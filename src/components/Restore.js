import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { useHistory, useParams } from 'react-router-dom';

import { RESTORE } from '../graphql/auth';

import { StyledFormWrapper, StyledForm, StyledInput, StyledButton, StyledError } from "../elements/auth/Form";

const Restore = () => {

  const { hash } = useParams();

  const history = useHistory();

  const [credentials, setCredentials] = useState({
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const [restore, { loading }] = useMutation(RESTORE);

  const onChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  };

  const submitForm = e => {
    e.preventDefault();

    restore({ variables: { ...credentials, hash } })
      .then(res => {
        //todo: get message and show it on login page
        history.push('/');
      })
      .catch(err => {
        // todo: display errors
        setErrors({
          ...err.graphQLErrors[0].extensions.errors
        });
        history.push('/');
      })
  };

  const content = loading ? (<div>Loading...</div>) : (
    <StyledForm onSubmit={submitForm}>
      <h1>Restore your password</h1>
      <label htmlFor="password">Password</label>
      <StyledInput type="password" name='password' onChange={onChange}/>
      <StyledError>{errors.password}</StyledError>
      <label htmlFor="confirmPassword">Confirm Password</label>
      <StyledInput type="password" name='confirmPassword' onChange={onChange}/>
      <StyledError>{errors.confirmPassword}</StyledError>
      <StyledButton>Restore</StyledButton>
    </StyledForm>
  );

  return (
    <StyledFormWrapper>
      { content }
    </StyledFormWrapper>
  );

};

export default Restore;
