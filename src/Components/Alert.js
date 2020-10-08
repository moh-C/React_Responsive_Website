import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import GithubContext from "../Context/Github/githubContext";

const Alert = () => {
  const githubContext = useContext(GithubContext);
  return (
    githubContext.alert !== null &&
    githubContext.alert.msg !== null && (
      <div className={`alert alert-${githubContext.alert.type}`}>
        <FontAwesomeIcon icon={faInfoCircle} /> {githubContext.alert.msg}
      </div>
    )
  );
};

export default Alert;
