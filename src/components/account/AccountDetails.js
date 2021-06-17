import React from 'react';
import {CardItem, MenuButton, StyledPanel} from "../../elements/account/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";

const AccountDetails = ({ edit, user }) => {
  return (
    <>
      <StyledPanel bgcolor='grey' size={30}>
        <MenuButton onClick={() => edit(true)}>
          <FontAwesomeIcon icon={faEdit}/>
          Edit
        </MenuButton>
        <MenuButton onClick={() => edit(true)}>
          <FontAwesomeIcon icon={faEdit}/>
          Change Password
        </MenuButton>

        <MenuButton onClick={() => edit(true)}>
          <FontAwesomeIcon icon={faEdit}/>
        </MenuButton>
      </StyledPanel>

      <StyledPanel bgcolor='white' size={70}>
        <CardItem borderColor="grey">
          Photo
        </CardItem>
        <CardItem borderColor="grey">
          <span>Full Name</span>
          { `${user.firstname} ${user.lastname}`}
        </CardItem>
        <CardItem borderColor="grey">
          <span>Nickname</span>
          <div>{ user.nickname }</div>
        </CardItem>
        <CardItem borderColor="grey">
          <span>Email</span>
          { user.email }
        </CardItem>
        <CardItem borderColor="grey">
          <span>Age</span>
          { user.age }
        </CardItem>
        <CardItem borderColor="grey">
          <span>Occupation</span>
          { user.occupation }
        </CardItem>
        <CardItem borderColor="grey">
          <span>Bio</span>
          { user.bio }
        </CardItem>
      </StyledPanel>
    </>
  );
};

export default AccountDetails;
