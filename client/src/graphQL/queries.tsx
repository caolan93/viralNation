import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    users(filter: "") {
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
