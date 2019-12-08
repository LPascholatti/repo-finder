import React from "react";
import logo from "./logo.png"

export default function SearchBarForm(props) {
  const { onSubmit, onChange, values } = props;

  return (
    <div className="search-bar">
      <div className="github-logo">
      <img alt="logo" src={logo}/>
      </div>
      <h1>Search GitHub Repositories</h1>
      <form onSubmit={onSubmit}>
        <label>
          {`Search: `}
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="repositories"
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
