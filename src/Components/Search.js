import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ setAlert, searchUsers, clearUsers, userLength }) => {
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      setAlert(null, null);
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
        {userLength ? (
          <button onClick={clearUsers} className="btn btn-danger btn-block">
            Clear
          </button>
        ) : null}
      </form>
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  userLength: PropTypes.number.isRequired,
};

export default Search;
