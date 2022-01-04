import React, { useContext } from 'react';
import { FriendsPanel, FriendsWrapper, RequestsPanel } from "../../elements/friends";
import { GET_FRIENDS } from "../../graphql/friends";
import { useFriendsDispatch, useFriendsState } from "../../context/friends";
import FriendItem from "./FriendItem";
import FriendRequestItem from "./FriendRequestItem";
import { GET_USERS } from "../../graphql/users";
import { useUserDispatch, useUserState } from "../../context/user";
import { AuthContext } from "../../context/auth";
import { useQueryOnDemand } from "../../utils/hooks/useQueryOnDemand";

const Friends = () => {
    const { user } = useContext(AuthContext);

    const userDispatch = useUserDispatch();
    const { users } = useUserState();
    useQueryOnDemand(GET_USERS, users, userDispatch, 'SET_USERS')

    const dispatch = useFriendsDispatch();
    const { friends } = useFriendsState();
    useQueryOnDemand(GET_FRIENDS, friends, dispatch, 'SET_FRIENDS')

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
