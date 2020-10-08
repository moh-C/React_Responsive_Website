import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./GithubReducer";
import Axios from "axios";
import {
  SEARCH_USERS,
  GET_USERS,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    alert: null,
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users

  // Get Users

  // Clear Users

  // Get Repos

  // Set Loading

  // Set Alert

  // Remove Alert

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        alert: state.alert,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
