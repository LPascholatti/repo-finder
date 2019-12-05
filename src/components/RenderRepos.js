import React, { Component } from "react";

export default class RenderRepos extends Component {
  renderRepos(items) {
    console.log("items", items);
    const { name, description, url, language } = items;

    return (
      <div className="renderRepos">
        <li key={name}>
          <h4>{name}</h4>
          <h5>{description}</h5>
          <h5>
            <a href={url}>{url}</a>
          </h5>
          <h5>{language}</h5>
        </li>
      </div>
    );
  }

  render() {
    const { repositories } = this.props;

    return (
      <div className="repositories-result">
        <h2>Repositories</h2>
        <h3>{repositories.total_count !== undefined && `You found ${repositories.total_count} repositories`}</h3>
        <br />
      </div>
    );
  }
}
