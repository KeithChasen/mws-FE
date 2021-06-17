import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../../context/auth";
import { StyledProfileWrapper, StyledCardWrapper } from "../../elements/account/Card";
import AccountDetails from "./AccountDetails";
import AccountEdit from "./AccountEdit";
import { StyledPopUp } from "../../elements/Form";


const Account = () => {
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState('');
  const [editing, setEditing] = useState(false);
  const content = editing ?
    <AccountEdit user={user} edit={setEditing} setMessage={setMessage}/> :
    <AccountDetails user={user} edit={setEditing}/>;

  // used to remove popup with message after 2seconds
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('');
      },2000)
    }
  }, [message]);

  return (
    <StyledProfileWrapper>
      { message && <StyledPopUp>{ message }</StyledPopUp> }
      <StyledCardWrapper>
        { content }
      </StyledCardWrapper>
    </StyledProfileWrapper>
  )
};

export default Account;