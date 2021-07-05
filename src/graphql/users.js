import { gql } from '@apollo/client'

const GET_USERS = gql`  
  query getUsers {
      getUsers {
          id
          bio
          age
          occupation
          nickname
          firstname
          lastname
          photo
      }
  }
`;

const GET_CHAT_USERS = gql`
    query getChatUsers {
        getChatUsers {
            id
            bio
            age
            occupation
            nickname
            firstname
            lastname
            photo
            recentMessage {
                content
            }
        }
    }
`;

const GET_USER = gql`
    query getUser($userId: ID) {
        getUser(userId: $userId) {
            id
            bio
            age
            occupation
            nickname
            firstname
            lastname
            photo
        }
    }
`;

export { GET_USERS, GET_USER, GET_CHAT_USERS };
