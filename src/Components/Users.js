import React, { Component } from "react";
import UserItem from "./UserItem";

export class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => {
          return <UserItem user={user} key={user.id}></UserItem>;
        })}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "0 1rem",
  padding: "0 10px",
};

export default Users;
