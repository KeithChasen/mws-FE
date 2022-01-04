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

const FriendRequestItem = ({ friend }) => {
    const dispatch = useFriendsDispatch();

    const [changeFriendshipStatus, { loading }] = useMutation(CHANGE_FRIENDSHIP_STATUS);

    const handleFriendshipStatus = status => {
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
        <FriendCard>
            <FriendPhoto src={ friend?.photo } />
            <FriendCardElement>
                <span>
                { `${friend?.firstname} ${friend?.lastname}` || friend?.nickname }
                </span>
            </FriendCardElement>
            <FriendsButtonsWrapper>
                <FriendCardButton bgcolor="green" top onClick={() => handleFriendshipStatus('active')}>
                    Confirm
                </FriendCardButton>
                <FriendCardButton bgcolor='red' bottom onClick={() => handleFriendshipStatus('')}>
                    Decline
                </FriendCardButton>
            </FriendsButtonsWrapper>
        </FriendCard>
    );
}

export default FriendRequestItem;
