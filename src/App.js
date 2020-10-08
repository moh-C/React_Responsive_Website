import React, { Fragment, useState } from "react";
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

const App = () => {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const clearUsers = () => {
    setUsers([]);
  };

  const searchUsers = async (text) => {
    setLoading(true);
    let url = `http://api.github.com/search/users?q=${text}&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

    const res = (await axios.get(url)).data.items;
    setLoading(false);
    setUsers(res);
  };

  const getUser = async (text) => {
    setLoading(true);
    let url = `http://api.github.com/users/${text}?
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = (await axios.get(url)).data;
    setLoading(false);
    setUser(res);
  };

  const getUserRepos = async (user) => {
    setLoading(true);
    let url = `http://api.github.com/users/${user}/repos?sort=created:asc&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = (await axios.get(url)).data;
    setLoading(false);
    setRepos(res);
  };

  const showAlert = (msg, type) => setAlert({ msg, type });

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
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    userLength={users.length}
                    setAlert={showAlert}
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
                  getUser={getUser}
                  getUserRepos={getUserRepos}
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
};

export default App;
