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

const UPLOAD_AVATAR = gql`
  mutation uploadAvatar(
      $file: Upload
  ) {
      uploadAvatar(file: $file) {
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

export { UPDATE_ACCOUNT, UPLOAD_AVATAR };
