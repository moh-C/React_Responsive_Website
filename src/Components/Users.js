import React from "react";
import UserItem from "./UserItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem user={user} key={user.id}></UserItem>
      ))}
    </div>
  );
};

Users.protoType = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "0 1rem",
};

export default Users;
