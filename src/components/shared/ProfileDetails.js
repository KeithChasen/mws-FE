import React, {useContext} from 'react';
import {CardItem, MenuButton, StyledPanel} from "../../elements/account/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import DefaultAvatar from "../../media/avatar-default.png";
import {AuthContext} from "../../context/auth";

const ProfileDetails = ({ loadedUser, upload, panelSize, fullSize }) => {
  const { user } = useContext(AuthContext);

  const changePhotoButton = user.id === loadedUser.id ? (
    <MenuButton onClick={() => upload(true)} upload>
      <FontAwesomeIcon icon={faEdit}/>
      Change avatar
    </MenuButton>
  ) : null;

  const emailLabel = user.id === loadedUser.id ? (
    <CardItem borderColor="grey">
      <span>Email</span>
      { user.email }
    </CardItem>
  ) : null;

  const onImageError = e => {
    e.target.src = DefaultAvatar;
  };

  return (
    <StyledPanel bgcolor='white' size={panelSize} fullSize={fullSize}>
      <CardItem borderColor="grey" avatar>
        <img src={ loadedUser.photo ?? DefaultAvatar } onError={onImageError} />
        { changePhotoButton }
      </CardItem>
      <CardItem borderColor="grey">
        <span>Full Name</span>
        { `${loadedUser.firstname} ${loadedUser.lastname}`}
      </CardItem>
      <CardItem borderColor="grey">
        <span>Nickname</span>
        <div>{ loadedUser.nickname }</div>
      </CardItem>
      { emailLabel }
      <CardItem borderColor="grey">
        <span>Age</span>
        { loadedUser.age }
      </CardItem>
      <CardItem borderColor="grey">
        <span>Occupation</span>
        { loadedUser.occupation }
      </CardItem>
      <CardItem borderColor="grey">
        <span>Bio</span>
        { loadedUser.bio }
      </CardItem>
    </StyledPanel>
  );

};

export default ProfileDetails;
