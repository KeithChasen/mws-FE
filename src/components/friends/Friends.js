import React, { useEffect } from 'react';
import { FriendsPanel, FriendsWrapper, RequestsPanel } from "../../elements/friends";

import { GET_FRIENDS } from "../../graphql/friends";
import { useFriendsDispatch, useFriendsState } from "../../context/friends";
import { useLazyQuery } from "@apollo/client";

const Friends = () => {
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

    let friendsRequests = [];
    let friendsList = [];

    if (friends) {
        friends.forEach(friend => {
            if (friend.status === 'active') {
                friendsList = [
                    ...friendsList,
                    friend
                ]
            }

            if (friend.status === 'pending') {
                friendsRequests = [
                    ...friendsRequests,
                    friend
                ]
            }
        })
    }

  return (
    <FriendsWrapper>
      <h1>
        Friends
      </h1>
      <RequestsPanel>
        { friendsRequests.length ? 'Show some friends requests' : 'No requests so far' }
      </RequestsPanel>
      <FriendsPanel>
        { friendsList.length ? 'Show some friends' : 'No friends so far' }
      </FriendsPanel>
    </FriendsWrapper>
  );
};

export default Friends;