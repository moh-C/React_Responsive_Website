import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import AlertContext from "../Context/Alert/alertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);
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
