import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import Search from "./Components/Search";
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

  searchUsers = async (text) => {
    this.setState({ loading: true });
    let url = `http://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = (await axios.get(url)).data.items;
    this.setState({ loading: false, users: res });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar title="Github Finder" icon="github" />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
