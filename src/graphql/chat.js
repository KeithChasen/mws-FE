import { gql } from '@apollo/client'

const GET_MESSAGES = gql`
    query getMessages ($from: ID) {
        getMessages(from: $from) {
            id content from to createdAt
        }
    }
`;

const SEND_MESSAGE = gql`    
    mutation sendMessage ($to: ID! $content: String!) {
        sendMessage(to: $to content: $content) {
            id to from content createdAt
        }
    }
`;

export { GET_MESSAGES, SEND_MESSAGE };
