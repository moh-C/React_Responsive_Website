import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

let Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <FontAwesomeIcon icon={["fab", icon]} /> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  icon: "github",
  title: "Finder",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
