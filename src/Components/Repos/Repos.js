import React, { Fragment } from "react";
import RepoItem from "./RepoItem";

let Repos = ({ repos }) => {
  return (
    <Fragment>
      <div className="card">
        {repos.map((element) => (
          <RepoItem repo={element} />
        ))}
      </div>
    </Fragment>
  );
};

export default Repos;
