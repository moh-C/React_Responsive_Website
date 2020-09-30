import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    icon: "github",
    title: "Finder",
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <FontAwesomeIcon icon={["fab", this.props.icon]} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
