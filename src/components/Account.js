import React, { useContext } from 'react';
import {AuthContext} from "../context/auth";

const Account = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
    <div>Account</div>
    <div>{ user.email }</div>
    </>
  )
};

export default Account;