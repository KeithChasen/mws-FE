import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { REGISTER } from '../graphql/auth';

const Register = () => {
  const history = useHistory();

  const initCredentials = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  const errorStyle = { border: '1px solid red'};

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
        localStorage.setItem('token', res.data.register.token);
        history.push('/');
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
        Register
      </h1>
      <form onSubmit={submitForm}>
        <input type="email" name='email' style={errors.email ? errorStyle : null} onChange={onChange}/>
        <p style={{ color: 'red' }}>{errors.email}</p>
        <input type="password" name='password' style={errors.password ? errorStyle : null} onChange={onChange}/>
        <p style={{ color: 'red' }}>{errors.password}</p>
        <input type="password" name='confirmPassword' style={errors.confirmPassword ? errorStyle : null} onChange={onChange}/>
        <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
