import React from 'react';
import {  MenuButton, StyledPanel } from "../../elements/account/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faUserEdit, faComments } from "@fortawesome/free-solid-svg-icons";
import ProfileDetails from "../shared/ProfileDetails";

const AccountDetails = ({ edit, user, upload }) => {
  const navigateToUsers = () => window.location.href = '/users';
  const navigateToChat = () => window.location.href = '/chat';
  const navigateToFriends = () => window.location.href = '/friends';

  return (
    <>
      <StyledPanel bgcolor='grey' size={30}>
        <MenuButton onClick={navigateToUsers}>
          <FontAwesomeIcon icon={faUserEdit}/>
          Users
        </MenuButton>
        <MenuButton onClick={navigateToFriends}>
          <FontAwesomeIcon icon={faUserFriends}/>
          Friends
        </MenuButton>
        <MenuButton onClick={navigateToChat}>
          <FontAwesomeIcon icon={faComments}/>
          Chat
        </MenuButton>
      </StyledPanel>

      <ProfileDetails loadedUser={user} upload={upload} edit={edit} panelSize={70} mobileWidth={100}/>
    </>
  );
};

export default AccountDetails;
