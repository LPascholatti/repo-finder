import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Badge from "react-bootstrap/Badge";

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
    owner,
    id
  } = props.repository;

  const getOwnerAvatar = () => {
    if (owner !== undefined) {
      return owner.avatar_url;
    }
  };

  console.log(getOwnerAvatar());

  return (
    <div className={"repo-details"}>
      <main>
        <Jumbotron fluid>
          <br />
          <br />
          <h1>
            <Badge variant="dark">{`${name}`}</Badge>
          </h1>
          <br />
          <div className="avatar-detail">
            <img alt={name} src={getOwnerAvatar()} />
          </div>
          <h2>{`Description: ${description}`}</h2>
          <h3>Language: {language}</h3>
          <p>Forks: {forks_count}</p>
          <p>Open Issues: {open_issues_count}</p>
          <p>Stargazers: {stargazers_count}</p>
          <p>Watchers:{watchers}</p>
          <p>Clone URL: {clone_url}</p>
          <p>
            URL: <a href={html_url}>{html_url}</a>
          </p>
          <br />
          <div className="details-buttons">
            <Link to={`${id}/readme`}>
              <Button variant="dark">Render Readme</Button>
            </Link>
            <div className="divider"></div>
            <Link to={"/"}>
              <Button variant="dark">Return</Button>
            </Link>
            </div>
          </Jumbotron>
      </main>
    </div>
  );
}
