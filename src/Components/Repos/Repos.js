import React, { Fragment, useContext } from "react";
import GithubContext from "../../Context/Github/githubContext";
import RepoItem from "./RepoItem";

const Repos = () => {
  const githubContext = useContext(GithubContext);
  let i = 0;
  return (
    <Fragment>
      <div className="card">
        {githubContext.repos.map((element) => (
          <RepoItem repo={element} key={i++} />
        ))}
      </div>
    </Fragment>
  );
};

export default Repos;
