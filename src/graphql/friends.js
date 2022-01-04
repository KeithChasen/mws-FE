import { gql } from '@apollo/client'

const SEND_FRIEND_REQUEST = gql`
    mutation addToFriendsRequest ($selectedUserId: ID!) {
        addToFriendsRequest(selectedUserId: $selectedUserId) {
            requester invitee status
        }
    }
`;

const GET_FRIENDS = gql`
    query getFriends {
        getFriends {
            requester
            invitee
            status
            id
        }
    }
`;

const CHANGE_FRIENDSHIP_STATUS = gql`
  mutation changeFriendshipStatus(
      $selectedUserId: ID!
      $friendshipStatus: String!
  ) {
      changeFriendshipStatus(
        selectedUserId: $selectedUserId
        friendshipStatus: $friendshipStatus
      ) {
            requester
            invitee
            status
            id
      }
  }
`;

export { SEND_FRIEND_REQUEST, GET_FRIENDS, CHANGE_FRIENDSHIP_STATUS };