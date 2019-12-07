import React from "react";
import { Link } from 'react-router-dom';

export default function RepoDetails(props) {
  console.log("props in RepoDetails", props);
  const {
    name,
    description,
    forks_count,
    clone_url,
    html_url,
    language,
    open_issues_count,
    stargazers_count,
    watchers,
    owner
  } = props.repository;

  console.log(owner)

  return (
    <div className={"repo-details"}>
      <main>
        <h1 style={{color: "blue"}}>{`${name}`}</h1>
        <h2>{`Description: ${description}`}</h2>
        <h3>Language: {language}</h3>
        <p>Forks: {forks_count}</p>
        <p>Open Issues: {open_issues_count}</p>
        <p>Stargazers: {stargazers_count}</p>
        <p>Watchers:{watchers}</p>
        <p>Clone URL: {clone_url}</p>
        <p>URL: <a href={html_url}>{html_url}</a></p>
        <br/>
        <button><Link to={'/'}>Return</Link></button>
      </main>
    </div>
  );
}
