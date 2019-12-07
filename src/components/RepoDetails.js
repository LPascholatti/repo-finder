import React from "react";

export default function RepoDetails(props) {
  console.log("props in RepoDetails", props)
  const { name, description } = props.repository;

  return (
    <div>
      <h1>{`${name}`}</h1>
      <h2>{`${description}`}</h2>
    </div>
  );
}
