import React from "react";
import PropTypes from "prop-types";

let RepoItem = ({ repo }) => {
  return (
    <div className="repoItem card text-center">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        {repo.name}
      </a>
      <div>{repo.language}</div>
    </div>
  );
};

RepoItem.prototype = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
