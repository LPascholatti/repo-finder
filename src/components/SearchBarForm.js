import React from "react";

export default function SearchBarForm(props) {
  const { onSubmit, onChange, values } = props;
  console.log("props", props);
  console.log("values", values);
  console.log("values.name", values.name);
  console.log("onSubmit", onSubmit);
  console.log("onChange", onChange);

  return (
    <div className="search-bar">
      <h3>Search Repositories</h3>
      <form onSubmit={onSubmit}>
        <label>
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
