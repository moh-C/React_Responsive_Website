import {
  SEARCH_USERS,
  GET_USERS,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case REMOVE_ALERT:
      return {
        ...state,
        alert: null,
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case GET_USERS:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default: {
      return state;
    }
  }
};
