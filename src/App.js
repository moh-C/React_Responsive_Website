import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import User from "./Components/User";
import Search from "./Components/Search";
import Alert from "./Components/Alert";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import About from "./Components/Pages/About";
import GithubState from "./Context/Github/GithubState";

library.add(fab);

const App = () => {
  return (
    <GithubState>
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
                    <Alert />
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/users/:login" component={User} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </GithubState>
  );
};

export default App;
