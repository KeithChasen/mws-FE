import React, { useState } from 'react';
import { useMutation } from "@apollo/client";

import { REGISTER } from '../graphql/auth';

const Register = () => {
  const initCredentials = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [credentials, setCredentials] = useState({
    ...initCredentials
  });

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
        console.log(res, 'register res')
      });
  };

  return (
    <div>
      <h1>
        Register
      </h1>
      <form onSubmit={submitForm}>
        <input type="email" name='email' onChange={onChange}/>
        <input type="password" name='password' onChange={onChange}/>
        <input type="password" name='confirmPassword' onChange={onChange}/>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
