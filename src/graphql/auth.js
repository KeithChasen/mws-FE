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
      }
  }
`;

export {
  REGISTER, LOGIN
};
