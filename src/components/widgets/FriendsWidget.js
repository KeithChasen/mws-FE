import React, { useState, useEffect } from 'react';
import { useFriendsState, useFriendsDispatch } from "../../context/friends";
import { useLazyQuery, useMutation } from "@apollo/client";
import { AddToFriendsButton } from "../../elements/friends";
import Modal from "./Modal";
import { SEND_FRIEND_REQUEST } from "../../graphql/friends";

import { GET_FRIENDS } from '../../graphql/friends'

const PENDING = 'pending';
const ACTIVE = 'active';

const FriendsWidget = ({ loadedUser, user }) => {
  const [showModal, toggleModal] = useState(false);
  const [friendRequest, { loading }] = useMutation(SEND_FRIEND_REQUEST);

  //todo: send it to the custom hook
  const [getFriends, { data }] = useLazyQuery(GET_FRIENDS);
  const dispatch = useFriendsDispatch();

  const { friends } = useFriendsState();

  useEffect(() => {
    if (friends === null) {
      getFriends()
    }
  },[friends, getFriends]);

  useEffect(() => {
    if (data) {
      dispatch({
        type: 'SET_FRIENDS',
        payload: data.getFriends
      })
    }
  }, [data, dispatch]);

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

  const manageFriendRequest = (friends, selectedUserId, authUserId) => {
    if (!friends)
      return [];

     return friends.filter(
      friend => (friend.invitee === authUserId && friend.requester === selectedUserId) ||
        (friend.requester === authUserId && friend.invitee === selectedUserId)
    )[0];
  };

  const friendshipButton = () => {
    if (user.id === loadedUser.id)
      return null;

    const friendRequest = manageFriendRequest(friends, loadedUser.id, user.id);

    if (!friendRequest)
      return (
        <AddToFriendsButton
          onClick={() => toggleModal(!showModal)}
        >
          Add to Friends
        </AddToFriendsButton>
      );

    if (friendRequest.invitee === user.id && friendRequest.status === PENDING)
      return (
        <AddToFriendsButton
          onClick={() => console.log('accepted!')}
        >
          Accept Request
        </AddToFriendsButton>
      );

    if (friendRequest.requester === user.id && friendRequest.status === PENDING)
      return (
        <h1>
          Request Sent
        </h1>
      );

    if ((friendRequest.requester === user.id || friendRequest.invitee === user.id) && friendRequest.status === ACTIVE)
      return (
        <AddToFriendsButton
          onClick={() => console.log('remove!')}
        >
          Remove Friend
        </AddToFriendsButton>
      );
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
