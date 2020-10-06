import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "./Spinner";

export default class User extends Component {
  hireableIcon = (
    <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
  );
  notHireable = (
    <FontAwesomeIcon icon={faTimesCircle} style={{ color: "red" }} />
  );
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      hireable,
      avatar_url,
      login,
      html_url,
      location,
      bio,
      created_at,
      followers,
      following,
      public_repos,
      public_gists,
    } = this.props.user;

    const userIcon = <FontAwesomeIcon icon={faUser} />;

    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <div className="btn btn-dark">Back to search</div>
        Hireable: {hireable ? this.hireableIcon : this.notHireable}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ maxWidth: "250px" }}
            />
            <h1>{name}</h1>
            {location && <h3>Location: {location}</h3>}
            <br />
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <br />
            {login && (
              <Fragment>
                <h3>Username</h3>
                <p>{login}</p>
              </Fragment>
            )}
            <br />
            {created_at && (
              <Fragment>
                <h3>Created at:</h3>
                <p>{new Date(created_at).toDateString()}</p>
              </Fragment>
            )}
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={html_url}
              className="btn btn-dark"
            >
              Visit this user on Github!
            </a>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">
            {userIcon} Followers: {followers}
          </div>
          <div className="badge badge-success">
            {userIcon} Following: {following}
          </div>
          <div className="badge badge-light">Public Gists: {public_gists}</div>
          <div className="badge badge-dark">Repositories: {public_repos}</div>
        </div>
      </Fragment>
    );
  }
}
