import React, {useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { REGISTER } from '../graphql/auth';
import { AuthContext } from "../context/auth";

import {StyledFormWrapper, StyledForm, StyledInput, StyledButton, StyledError, StyledMessage} from "../elements/Form";

const Register = props => {
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
  const [message, setMessage] = useState('');
  const [register, { data }] = useMutation(REGISTER);

  useEffect(() => {
    if (props.location.error) {
      setErrors({ common: props.location.error });
    } else if (props.location.message) {
      setMessage(props.location.message);
    }
  }, [props.location.error, props.location.message]);

  const onChange = e => {
    setErrors({});
    setMessage('');
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

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
        <StyledMessage>{message}</StyledMessage>
        <StyledError>{errors.common}</StyledError>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default Register;
