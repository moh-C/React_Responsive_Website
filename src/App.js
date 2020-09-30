import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

library.add(fab);

export class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await (await axios.get("http://api.github.com/users")).data;
    this.setState({ loading: false, users: res });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar title="Github Finder" icon="github" />
        <Users loading={this.state.loading} users={this.state.users} />
      </React.Fragment>
    );
  }
}

export default App;
