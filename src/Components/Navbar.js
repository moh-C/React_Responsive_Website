import React, { useState } from "react";
import { Link } from "react-Router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <>
      <nav>
        <div className=".navbar-container">
          <Link to="/" className="navbar-logo"></Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
