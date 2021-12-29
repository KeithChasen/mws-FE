import React, {useContext, useEffect} from 'react';
import { FriendsPanel, FriendsWrapper, RequestsPanel } from "../../elements/friends";

import { GET_FRIENDS } from "../../graphql/friends";
import { useFriendsDispatch, useFriendsState } from "../../context/friends";
import { useLazyQuery } from "@apollo/client";
import FriendItem from "./FriendItem";
import FriendRequestItem from "./FriendRequestItem";
import { GET_USERS } from "../../graphql/users";
import { useUserDispatch, useUserState } from "../../context/user";
import {AuthContext} from "../../context/auth";

const Friends = () => {
    const { user } = useContext(AuthContext);
    //todo: send it to the custom hook along with stuff from UsersList
    const userDispatch = useUserDispatch();

    const { users } = useUserState();

    const [getUsers, { data: usersData }] = useLazyQuery(GET_USERS,{
        fetchPolicy: 'no-cache'
    });

    useEffect(() => {
        if (typeof users === 'undefined') {
            getUsers()
        }
    },[users, getUsers]);

    useEffect(() => {
        if (usersData) {
            userDispatch({ type: 'SET_USERS', payload: usersData.getUsers })
        }
    }, [usersData, userDispatch]);

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

            if (friend.status === 'pending' && friend.invitee === user.id) {
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
      <h4>Requests</h4>
      <RequestsPanel>

        { friendsRequests.length ?
            friendsRequests.map(friendRequest => {
                if (users) {
                    const userId = friendRequest.requester;
                    const [friend] = users.filter(user => user.id === userId);
                    return ( <FriendRequestItem key={friendRequest.id} friend={friend} /> )
                }

                return null;
            })
            : 'No requests so far' }
      </RequestsPanel>
      <h4>Friends</h4>
      <FriendsPanel>
        { friendsList.length ?
            friendsList.map(friend => {
                return ( <FriendItem key={friend.id} friend /> )
            }) : 'No friends so far' }
      </FriendsPanel>
    </FriendsWrapper>
  );
};

export default Friends;
