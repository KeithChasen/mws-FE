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

export {
  REGISTER
};
