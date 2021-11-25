import React, {useState} from 'react';
import { FriendsPanel, FriendsWrapper, RequestsPanel } from "../../elements/friends";

const Friends = () => {
  const [friendsRequests, setFriendsRequests] = useState([]);
  const [friendsList, setFriendsList] = useState([]);
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