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

export { GET_USERS, GET_USER };
