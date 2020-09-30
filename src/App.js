import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar title="Github Finder" icon="github" />
        <Users />
      </React.Fragment>
    );
  }
}

export default App;
