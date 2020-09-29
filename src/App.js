import React from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faUser);

function App() {
  return (
    <div className="App">
      <h1>Yo</h1>
      <FontAwesomeIcon icon={["fab", "github"]} />
    </div>
  );
}

export default App;
