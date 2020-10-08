import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "./Spinner";
import GithubContext from "../Context/Github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  if (githubContext.loading) {
    return <Spinner />;
  }
  return (
    <div className="singleUser">
      {githubContext.users.map((user) => (
        <UserItem user={user} key={user.id}></UserItem>
      ))}
    </div>
  );
};

export default Users;
