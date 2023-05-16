// @ts-nocheck

import { gql } from "@apollo/client";
import { useSelector } from "react-redux";
import { store } from "../store";

const state = store.getState();
const filter = state?.form?.filterValue;

export const GET_USERS = gql`
  query {
    users(filter: "${filter}") {
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
