import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { useHistory } from 'react-router-dom';

import { FORGOT } from '../graphql/auth';

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
    <>
      <h1>Forgot password</h1>
      <form onSubmit={submitForm}>
        <input type="email" name='email' onChange={onChange}/>
        <p style={{color: 'red'}}>{errors.email}</p>
        <button>Reset</button>
      </form>
    </>
  );
};

export default Forgot;
