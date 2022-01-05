import React from 'react';
import {
    FriendCard,
    FriendCardButton,
    FriendCardElement,
    FriendPhoto,
    FriendsButtonsWrapper
} from "../../elements/friends";
import { useMutation } from "@apollo/client";
import { CHANGE_FRIENDSHIP_STATUS } from "../../graphql/friends";
import { useFriendsDispatch } from "../../context/friends";
import DefaultAvatar from "../../media/avatar-default.png";

const FriendRequestItem = ({ friend }) => {
    const dispatch = useFriendsDispatch();

    const [changeFriendshipStatus, { loading }] = useMutation(CHANGE_FRIENDSHIP_STATUS);

    const handleFriendshipStatus = (e, status) => {
        e.preventDefault();

        const changeStatusObject = {
            selectedUserId: friend.id,
            friendshipStatus: status || '' //empty status means cancel friend request and delete record from DB
        }

        changeFriendshipStatus({ variables: changeStatusObject })
            .then(res => {
                if (res.data.changeFriendshipStatus.status === 'active') {
                    dispatch({
                        type: 'UPDATE_FRIENDS',
                        payload: res.data.changeFriendshipStatus
                    })
                } else {
                    dispatch({
                        type: 'DELETE_FRIEND',
                        payload: res.data.changeFriendshipStatus
                    })
                }
            })
            .catch(err => {})
    }

    return (
        <FriendCard  key={friend.id} to={ `/user/${friend.id}` }>
            <FriendPhoto src={ friend?.photo ?? DefaultAvatar } />
            <FriendCardElement>
                <span>
                { `${friend?.firstname} ${friend?.lastname}` || friend?.nickname }
                </span>
            </FriendCardElement>
            <FriendsButtonsWrapper>
                <FriendCardButton bgcolor="green" top onClick={(e) => handleFriendshipStatus(e,'active')}>
                    Confirm
                </FriendCardButton>
                <FriendCardButton bgcolor='red' bottom onClick={(e) => handleFriendshipStatus(e, '')}>
                    Decline
                </FriendCardButton>
            </FriendsButtonsWrapper>
        </FriendCard>
    );
}

export default FriendRequestItem;
