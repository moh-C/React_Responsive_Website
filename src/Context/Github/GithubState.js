import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./GithubReducer";
import axios from "axios";
import {
  SEARCH_USERS,
  GET_USERS,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();
    let url = `http://api.github.com/search/users?q=${text}&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = (await axios.get(url)).data.items;

    dispatch({ type: SEARCH_USERS, payload: res });
  };

  // Get User
  const getUser = async (text) => {
    setLoading();
    let url = `http://api.github.com/users/${text}?
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = (await axios.get(url)).data;
    dispatch({ type: GET_USERS, payload: res });
  };

  // Clear Users
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  // Get Repos
  const getUserRepos = async (user) => {
    setLoading();
    let url = `http://api.github.com/users/${user}/repos?sort=created:asc&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = (await axios.get(url)).data;
    dispatch({
      type: GET_REPOS,
      payload: res,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Return
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        alert: state.alert,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
