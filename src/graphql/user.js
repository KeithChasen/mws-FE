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
                email
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

export { UPDATE_ACCOUNT };
