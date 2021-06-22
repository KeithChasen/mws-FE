import { gql } from '@apollo/client'

const GET_MESSAGES = gql`
    query getMessages ($from: ID) {
        getMessages(from: $from) {
            id content from to createdAt
        }
    }
`;

export { GET_MESSAGES };
