import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../../context/auth";
import { StyledProfileWrapper, StyledCardWrapper } from "../../elements/account/Card";
import AccountDetails from "./AccountDetails";
import AccountEdit from "./AccountEdit";
import UploadAvatar from "./UploadAvatar";
import { StyledPopUp } from "../../elements/Form";

const Account = (props) => {
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState('');
  const [editing, setEditing] = useState(false);
  const [avatarUploading, setAvatarUploading] = useState(false);
  const content = editing ?
    <AccountEdit user={user} edit={setEditing} setMessage={setMessage}/> :
    avatarUploading ?
      <UploadAvatar edit={setAvatarUploading} setMessage={setMessage}/> :
    <AccountDetails user={user} edit={setEditing} upload={setAvatarUploading}/>;

  //return to default account page from editing or photo uploading by clicking Account link it the menu
  useEffect(() => {
    if (props.history.action === 'PUSH') {
      setEditing(false);
      setAvatarUploading(false);
    }
  }, [props]);

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