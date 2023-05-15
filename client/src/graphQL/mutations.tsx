import { gql } from "@apollo/client";

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const FILTER_USERS = gql`
  mutation filterUsers($filter: String!, $orderBy: String!) {
    filterUsers(filter: $filter) {
      id
      first_name
      last_name
      email
      is_verified
      image
      description
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

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID!
    $first_name: String!
    $last_name: String!
    $email: String!
    $image: String!
    $description: String!
    $is_verified: Boolean!
  ) {
    updateUser(
      id: $id
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
