import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import User from "./Components/User";
import Search from "./Components/Search";
import Alert from "./Components/Alert";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import About from "./Components/Pages/About";

library.add(fab);

export class App extends Component {
  state = {
    users: [],
    repos: [],
    user: {},
    loading: false,
    alert: null,
  };

  clearUsers = () => {
    this.setState({ users: [] });
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });
    let url = `http://api.github.com/search/users?q=${text}&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

    const res = (await axios.get(url)).data.items;
    this.setState({ loading: false, users: res });
  };

  getUser = async (text) => {
    this.setState({ loading: true });
    let url = `http://api.github.com/users/${text}?
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = (await axios.get(url)).data;
    this.setState({ loading: false, user: res });
  };

  getUserRepos = async (user) => {
    this.setState({ loading: true });
    let url = `http://api.github.com/users/${user}/repos?sort=created:asc&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = (await axios.get(url)).data;
    this.setState({ loading: false, repos: res });
  };

  setAlert = (msg, type) => this.setState({ alert: { msg, type } });

  render() {
    const { loading, users, alert, user, repos } = this.state;
    return (
      <Router>
        <Fragment>
          <Navbar title="Github Finder" icon="github" />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Alert alert={alert} />
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      userLength={users.length}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/users/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    repos={repos}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
