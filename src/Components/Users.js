import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "./Spinner";
import GithubContext from "../Context/Github/githubContext";

const Users = () => {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="singleUser">
      {users.map((user) => (
        <UserItem user={user} key={user.id}></UserItem>
      ))}
    </div>
  );
};

export default Users;
