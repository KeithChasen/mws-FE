import React from 'react';
import {
    FriendCard,
    FriendCardButton,
    FriendCardElement,
    FriendPhoto,
    FriendsButtonsWrapper
} from "../../elements/friends";

const FriendRequestItem = ({ friend }) => {
    return (
        <FriendCard>
            <FriendPhoto src={ friend?.photo } />
            <FriendCardElement>
                <span>
                { `${friend?.firstname} ${friend?.lastname}` || friend?.nickname }
                </span>
            </FriendCardElement>
            <FriendsButtonsWrapper>
                <FriendCardButton bgcolor="green" top>Confirm</FriendCardButton>
                <FriendCardButton bgcolor='red' bottom>Decline</FriendCardButton>
            </FriendsButtonsWrapper>
        </FriendCard>
    );
}

export default FriendRequestItem;
