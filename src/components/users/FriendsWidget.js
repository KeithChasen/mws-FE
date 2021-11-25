import React from 'react';
import { AddToFriendsButton } from "../../elements/friends";

const FriendsWidget = ({ loadedUser, user }) => {
  const friendshipButton = () => {
    if (user.id === loadedUser.id)
      return null;

    //if user.friendsList.find(loadedUser.id) - means they are already friends
    // Remove

    //if !user.friendsList.find(loadedUser.id) - means they can send request to add to friends
    // Add

    return (<AddToFriendsButton>Add to Friends</AddToFriendsButton>)
  };

  return (
    <div>
      { friendshipButton() }
    </div>
  );

};

export  default FriendsWidget;
