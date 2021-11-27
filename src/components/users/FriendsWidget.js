import React, { useState } from 'react';
import { AddToFriendsButton } from "../../elements/friends";
import Modal from "../widgets/Modal";

const FriendsWidget = ({ loadedUser, user }) => {
  const [showModal, toggleModal] = useState(false);
  const modalHeader = 'Add to Friends';
  const modalBody = `You're about to add ${loadedUser.firstname} ${loadedUser.lastname} to friends`;

  const friendshipButton = () => {
    if (user.id === loadedUser.id)
      return null;

    //if user.friendsList.find(loadedUser.id) - means they are already friends
    // Remove

    //if !user.friendsList.find(loadedUser.id) - means they can send request to add to friends
    // Add

    return (
      <AddToFriendsButton
        onClick={() => toggleModal(!showModal)}
      >
        Add to Friends
      </AddToFriendsButton>
    )
  };

  return (
    <>
      <Modal { ...{ showModal, toggleModal, modalHeader, modalBody  } }  />
      <div>
        { friendshipButton() }
      </div>
    </>
  );

};

export  default FriendsWidget;
