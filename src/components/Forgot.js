import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { useHistory } from 'react-router-dom';

import { FORGOT } from '../graphql/auth';

import { StyledFormWrapper, StyledForm, StyledInput, StyledButton, StyledError } from "../elements/Form";

const Forgot = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const [forgot, { data }] = useMutation(FORGOT);

  const onChange = e => setEmail(e.target.value);

  const submitForm = e => {
    e.preventDefault();
    forgot({ variables: { email } })
      .then(res => {
        //todo: push message to login page
        history.push('/login');
      })
      .catch(err => {
        setErrors(err.graphQLErrors[0].extensions.errors);
        // todo: push error through to the login or register component
        history.push('/login');
      });
  };

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={submitForm}>
        <h1>Forgot password</h1>
        <label htmlFor="email">Email</label>
        <StyledInput type="email" name='email' error={errors.email} onChange={onChange}/>
        <StyledError>{errors.email}</StyledError>
        <StyledButton>Reset</StyledButton>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default Forgot;
