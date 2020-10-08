import React, { useContext, useState } from "react";
import GithubContext from "../Context/Github/githubContext";

const Search = () => {
  const { showAlert, hideAlert, searchUsers, clearUsers, users } = useContext(
    GithubContext
  );

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      showAlert("Please enter something", "light");
    } else {
      hideAlert();
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        />

        <input
          type="submit"
          className="btn btn-dark btn-block"
          value="Search"
        />
        {users.length ? (
          <button onClick={clearUsers} className="btn btn-danger btn-block">
            Clear
          </button>
        ) : null}
      </form>
    </div>
  );
};

export default Search;
