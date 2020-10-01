import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
          <Link to={`/users/${login}`} className="btn btn-dark btn-sm my-1">
            More...
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.defaultProps = {
  users: PropTypes.object.isRequired,
};

export default UserItem;
