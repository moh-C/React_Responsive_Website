import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Main from "./Components/Pages/Main";
import User from "./Components/User";
import About from "./Components/Pages/About";

import GithubState from "./Context/Github/GithubState";
import AlertState from "./Context/Alert/AlertState";

import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar title="Github Finder" icon="github" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/about" component={About} />
                <Route exact path="/users/:login" component={User} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
