import React, { Fragment } from "react";
import Alert from "./Alert";
import Search from "./Search";
import Users from "./Users";

export default () => {
  return (
    <Fragment>
      <Alert />
      <Search />
      <Users />
    </Fragment>
  );
};
