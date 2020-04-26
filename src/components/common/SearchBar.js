import React from "react";

function SearchBar(props) {
  const { onSearch } = props;
  return (
    <form className={"container"}>
      <div className="input-field">
        <input
          className={"center"}
          id="search"
          type="search"
          onChange={(e) => onSearch(e.target.value)}
        />
        <label className="label-icon" for="search">
          <i className="material-icons">search</i>
        </label>
        <i className="material-icons">close</i>
      </div>
    </form>
  );
}

export default SearchBar;
