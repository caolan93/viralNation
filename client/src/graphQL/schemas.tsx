import { gql } from "@apollo/client";

export const GET_ALL_PROFILES = gql`
  query {
    getAllProfiles {
      profiles {
        id
        first_name
        last_name
        email
        is_verified
        image_url
        description
      }
    }
  }
`;
