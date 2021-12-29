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

export { SEND_FRIEND_REQUEST, GET_FRIENDS };