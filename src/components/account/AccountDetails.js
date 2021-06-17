import React from 'react';
import {CardItem, EditButton, StyledPanel} from "../../elements/account/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";

const AccountDetails = ({ edit, user }) => {
  return (
    <>
      <StyledPanel bgcolor='grey' size={30}>
        <EditButton onClick={() => edit(true)}>
          <FontAwesomeIcon icon={faEdit}/>
        </EditButton>
        <CardItem borderColor="white">
          Email
          <p>{ user.email }</p>
        </CardItem>
        <CardItem borderColor="white">Age</CardItem>
        <CardItem borderColor="white">Occupation</CardItem>
      </StyledPanel>
      <StyledPanel bgcolor='white' size={70}>
        <CardItem borderColor="grey">Photo</CardItem>
        <CardItem borderColor="grey">Nickname</CardItem>
        <CardItem borderColor="grey">Full Name</CardItem>
        <CardItem borderColor="grey">Bio</CardItem>
      </StyledPanel>
    </>
  );
};

export default AccountDetails;
