import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { useHistory, useParams } from 'react-router-dom';

import { RESTORE } from '../graphql/auth';

const Restore = () => {

  const { hash } = useParams();

  const history = useHistory();

  const [credentials, setCredentials] = useState({
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const [restore, { data }] = useMutation(RESTORE);

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

  return (
    <>
      <h1>Restore your password</h1>
      <form onSubmit={submitForm}>
        <input type="password" name='password' onChange={onChange}/>
        <input type="password" name='confirmPassword' onChange={onChange}/>
        <button>Restore</button>
      </form>
    </>
  );

};

export default Restore;
