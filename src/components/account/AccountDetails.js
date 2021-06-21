import React from 'react';
import {  MenuButton, StyledPanel } from "../../elements/account/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import ProfileDetails from "../shared/ProfileDetails";

const AccountDetails = ({ edit, user, upload }) => {

  const navigateToUsers = () => window.location.href = '/users';
  const navigateToChat = () => window.location.href = '/chat';

  return (
    <>
      <StyledPanel bgcolor='grey' size={30}>
        <MenuButton onClick={() => edit(true)}>
          <FontAwesomeIcon icon={faEdit}/>
          Edit
        </MenuButton>
        <MenuButton onClick={navigateToUsers}>
          <FontAwesomeIcon icon={faEdit}/>
          Users
        </MenuButton>
        <MenuButton onClick={() => console.log()} disabled={true}>
          <FontAwesomeIcon icon={faEdit}/>
          Change Password (TBD)
        </MenuButton>
        <MenuButton onClick={navigateToChat}>
          <FontAwesomeIcon icon={faEdit}/>
          Chat
        </MenuButton>
      </StyledPanel>

      <ProfileDetails loadedUser={user} upload={upload} panelSize={70}/>
    </>
  );
};

export default AccountDetails;
