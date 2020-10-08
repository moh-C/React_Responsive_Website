import React, { Fragment } from "react";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  let i = 0;
  return (
    <Fragment>
      <div className="card">
        {repos.map((element) => (
          <RepoItem repo={element} key={i++} />
        ))}
      </div>
    </Fragment>
  );
};

export default Repos;
