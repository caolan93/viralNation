import { gql } from "@apollo/client";

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $first_name: String!
    $last_name: String!
    $email: String!
    $image: String!
    $description: String!
    $is_verified: Boolean!
  ) {
    addUser(
      first_name: $first_name
      last_name: $last_name
      image: $image
      email: $email
      description: $description
      is_verified: $is_verified
    ) {
      id
      first_name
      last_name
      image
      email
      description
      is_verified
    }
  }
`;
