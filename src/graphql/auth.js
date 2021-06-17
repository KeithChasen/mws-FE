import { gql } from '@apollo/client'

const REGISTER = gql`
  mutation register(
      $email: String!
      $password: String!
      $confirmPassword: String!
  ){
      register(
          registerInput: {
              email: $email
              password: $password
              confirmPassword: $confirmPassword
          }
      ) {
          id
          token
      }
      
  }
`;

const LOGIN = gql`
  mutation login(
      $email: String!
      $password: String!
  ) {
      login(
          loginInput: {
              email: $email
              password: $password
          }
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

const FORGOT = gql`
  mutation forgot(
      $email: String!
  ) {
      forgot(
          forgotInput: {
              email: $email
          }
      ) {
          status
          message
      }
  }
`;

const RESTORE = gql`
    mutation restore(
        $password: String!
        $confirmPassword: String!
        $hash: String!
    ) {
        restore(
            restoreInput: {
                password: $password
                confirmPassword: $confirmPassword
                hash: $hash
            }
        ) {
            status
            message
        }
    }
`;

export {
  REGISTER, LOGIN, FORGOT, RESTORE
};
