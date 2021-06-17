import { gql } from '@apollo/client'

const UPDATE_ACCOUNT = gql`
    mutation updateUser(
      $bio: String
      $age: String
      $occupation: String
      $nickname: String
      $firstname: String
      $lastname: String
    ) {
        updateUser (
              bio: $bio
              age: $age
              occupation: $occupation
              nickname: $nickname
              firstname: $firstname
              lastname: $lastname
            ) {
                id
                token
            }
    }
`;

export { UPDATE_ACCOUNT };
