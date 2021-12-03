import { gql } from '@apollo/client'

const SEND_FRIEND_REQUEST = gql`
    mutation addToFriendsRequest ($selectedUserId: ID!) {
        addToFriendsRequest(selectedUserId: $selectedUserId) {
            requester invitee status
        }
    }
`;

export { SEND_FRIEND_REQUEST };