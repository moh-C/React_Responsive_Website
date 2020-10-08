import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const hireableIcon = (
  <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
);
export const notHireable = (
  <FontAwesomeIcon icon={faTimesCircle} style={{ color: "red" }} />
);

export const userIcon = <FontAwesomeIcon icon={faUser} />;
