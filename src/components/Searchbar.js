import React from "react";
import "./_searchbar.css";
import searchIcon from "../assets/icon-search.svg";

const Searchbar = (props) => {
  const { userInfo, handleSubmit } = props;

  return (
    <div>
      <section className="search">
        <form
          className="form__user-search"
          action="user__search"
          onSubmit={handleSubmit}
        >
          <label></label>
          <img className="user__search-icon" src={searchIcon} alt="" />
          <input
            className="user__search-input"
            type="search"
            placeholder="Search GitHub username"
            name="user__search"
            id="user__search"
          />
          <input
            className="search__button"
            id="search__button"
            type="submit"
            value="search"
          />
        </form>
      </section>
    </div>
  );
};

export default Searchbar;
