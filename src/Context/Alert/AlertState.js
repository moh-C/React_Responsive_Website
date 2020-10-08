import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const GithubState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const showAlert = (msg, type) =>
    dispatch({ type: SET_ALERT, payload: { msg, type } });

  // Hide Alert
  const hideAlert = () => dispatch({ type: REMOVE_ALERT });

  // Return
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        showAlert,
        hideAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default GithubState;
