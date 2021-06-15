import React, { useContext, useState } from 'react';
import { AuthContext } from "../context/auth";
import {StyledProfileWrapper, StyledCardWrapper, StyledPanel, CardItem, EditButton} from "../elements/account/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";


const Account = () => {
  const { user } = useContext(AuthContext);
  const { editing, setEditing } = useState(false);

  return (
    <StyledProfileWrapper>
      <StyledCardWrapper>
        <StyledPanel bgcolor='grey' size={30}>
          <EditButton>
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
      </StyledCardWrapper>
    </StyledProfileWrapper>
  )
};

export default Account;