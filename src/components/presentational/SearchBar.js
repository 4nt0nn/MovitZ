import React from "react";

/**
 * Functional searchbar component used in the
 * dashboard for firing a search request with
 * the typed in searchword.
 *
 * @param {object} props - holding the onSearch function.
 */
const SearchBar = (props) => {
  const { onSearch, onSubmitSearch } = props;
  return (
    <nav className={"container white z-depth-0 black-text"}>
      <div className={"nav-wrapper"}>
        <form onSubmit={onSubmitSearch}>
          <div className={"input-field"}>
            <input
              placeholder={"Search..."}
              id={"search"}
              type={"search"}
              onChange={(e) => onSearch(e.target.value)}
            />
            <label className={"label-icon"} htmlFor={"search"}>
              <i className={"material-icons black-text"}>search</i>
            </label>
            <i className={"material-icons"}>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
