import React from "react";
import PropTypes from "prop-types";

let UserItem = ({ user: { html_url, avatar_url, login } }) => {
  return (
    <div>
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-sm my-1"
          >
            More...
          </a>
        </div>
      </div>
    </div>
  );
};

UserItem.defaultProps = {
  users: PropTypes.object.isRequired,
};

export default UserItem;
