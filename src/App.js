import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import Search from "./Components/Search";
import Alert from "./Components/Alert";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

library.add(fab);

export class App extends Component {
  state = {
    users: [],
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

  setAlert = (msg, type) => this.setState({ alert: { msg, type } });

  render() {
    const { loading, users, alert } = this.state;
    return (
      <React.Fragment>
        <Navbar title="Github Finder" icon="github" />
        <div className="container">
          <Alert alert={alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            userLength={users.length}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
