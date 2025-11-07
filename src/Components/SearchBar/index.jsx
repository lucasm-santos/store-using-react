import React from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

export const SearchBar = ({ onChange, value }) => {
  return (
    <form className="search-form">
      <div className="search">
        <input
          className="input"
          type="search"
          placeholder="Pesquisa"
          value={value}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
      </div>
      <button className="icon-btn">
        <FaSearch className="icon" />
      </button>
    </form>
  );
};
