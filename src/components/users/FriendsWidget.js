import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { AddToFriendsButton } from "../../elements/friends";
import Modal from "../widgets/Modal";
import { SEND_FRIEND_REQUEST } from "../../graphql/friends";

const FriendsWidget = ({ loadedUser, user }) => {
  const [showModal, toggleModal] = useState(false);
  const [friendRequest, { loading }] = useMutation(SEND_FRIEND_REQUEST);
  const modalHeader = 'Add to Friends';
  const modalBody = `You're about to add ${loadedUser.firstname} ${loadedUser.lastname} to friends`;

  const confirmAction = () => {
    //send friends request to server
    friendRequest({ variables: { selectedUserId: loadedUser.id } })
      .then(res => {
        console.log(res, 'res')
      })
      .catch(errors => {
        console.log('Errors', errors.graphQLErrors[0].extensions.errors)
      });

    toggleModal(false);
  };

  const cancelAction = () => {
    toggleModal(false);
  };

  const friendshipButton = () => {
    if (user.id === loadedUser.id)
      return null;

    //if user.friendsList.find(loadedUser.id).status === 'pending - means they are already friends
    // Pending

    //if user.friendsList.find(loadedUser.id).status === 'active' - means they are already friends
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
      <Modal { ...{ showModal, confirmAction, cancelAction, modalHeader, modalBody  } }  />
      <div>
        { friendshipButton() }
      </div>
    </>
  );

};

export  default FriendsWidget;
