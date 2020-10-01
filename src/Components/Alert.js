import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Alert = ({ alert }) => {
  return (
    alert !== null &&
    alert.msg !== null && (
      <div className={`alert alert-${alert.type}`}>
        <FontAwesomeIcon icon={faInfoCircle} /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
