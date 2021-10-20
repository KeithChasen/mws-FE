import React, {useContext} from 'react';
import { CardItem, MenuButton, StyledPanel } from "../../elements/account/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import DefaultAvatar from "../../media/avatar-default.png";
import { AuthContext } from "../../context/auth";

const ProfileDetails = ({ loadedUser, upload, panelSize, edit }) => {
  const { user } = useContext(AuthContext);

  const changePhotoButton = user.id === loadedUser.id ? (
    <MenuButton onClick={() => upload(true)} upload={true}>
      <FontAwesomeIcon icon={faPhotoVideo}/>
        Change photo
    </MenuButton>
  ) : null;

  const editButton = user.id === loadedUser.id ? (
    <MenuButton onClick={() => edit(true)} upload={true}>
      <FontAwesomeIcon icon={faEdit}/>
      Edit
    </MenuButton>
  ) : null;

  const emailLabel = user.id === loadedUser.id ? (
    <CardItem borderColor="grey">
      <div className="label">Email</div>
      <div className="card-value">{ user.email }</div>
    </CardItem>
  ) : null;

  const isVisibleAccountNote = () => {
    if (user.id !== loadedUser.id)
      return null;

    if(loadedUser.nickname || (loadedUser.firstname && loadedUser.lastname))
      return null;

    return (
      <CardItem borderColor="grey">
        Note: your account isn't visible for other users.  Add at least nickname or full name
      </CardItem>
    )
  };

  const onImageError = e => {
    e.target.src = DefaultAvatar;
  };

  return (
    <StyledPanel bgcolor='white' size={panelSize} fullSize={true}>
      <CardItem borderColor="grey" avatar={true}>
        <img src={ loadedUser.photo ?? DefaultAvatar } onError={onImageError} alt=''/>
        <div className="edit-buttons">
          { changePhotoButton }
          { editButton }
        </div>
      </CardItem>

      { isVisibleAccountNote() }
      <CardItem borderColor="grey">
        <div className="label">Full Name</div>
        <div className="card-value">{ `${loadedUser.firstname ?? ''} ${loadedUser.lastname ?? ''}`}</div>
      </CardItem>
      <CardItem borderColor="grey">
        <div className="label">Nickname</div>
        <div className="card-value">{ loadedUser.nickname }</div>
      </CardItem>
      { emailLabel }
      <CardItem borderColor="grey">
        <div className="label">Age</div>
        <div className="card-value">{ loadedUser.age }</div>
      </CardItem>
      <CardItem borderColor="grey">
        <div className="label">Occupation</div>
        <div className="card-value">{ loadedUser.occupation }</div>
      </CardItem>
      <CardItem borderColor="grey">
        <div className="label">Bio</div>
        <div className="card-value">{ loadedUser.bio }</div>
      </CardItem>
    </StyledPanel>
  );

};

export default ProfileDetails;
