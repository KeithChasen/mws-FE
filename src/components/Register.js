import React, { useState } from 'react';

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onChange = e =>
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });

  const submitForm = e => {
    e.preventDefault();

    console.log(credentials, 'credentials')
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
