import React, { Component } from "react";

export class Users extends Component {
  state = {
    id: "id",
    login: "mojombo",
    html_url: "https://github.com/mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  };
  render() {
    const { html_url, avatar_url, login } = this.state;
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
            <a href={html_url} className="btn btn-dark btn-sm my-1">
              More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
