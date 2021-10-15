import { gql } from '@apollo/client'

const GET_MESSAGES = gql`
    query getMessages ($from: ID, $step: Int) {
        getMessages(from: $from, step: $step) {
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

const NEW_MESSAGE = gql`    
    subscription newMessage {
        newMessage {
            id content from to createdAt
        }
    }
`;

export { GET_MESSAGES, SEND_MESSAGE, NEW_MESSAGE };
