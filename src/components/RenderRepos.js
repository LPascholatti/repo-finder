import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RenderRepos extends Component {
  renderRepos(items) {
    console.log(items);
    const {
      name,
      owner,
      url,
      watchers,
      language,
      open_issues,
      description,
      id
    } = items;

    return (
      <div className="rendered-repos">
        <li key={name}>
          <Link to={`repositories/${id}`}>
            <h3 style={{ color: "blue" }}>{name}</h3>
          </Link>
          <h4> Owner:{owner.login}</h4>
          <h4>
            URL: <a href={url}>{url}</a>
          </h4>
          <h4>Watchers: {watchers}</h4>
          <h4>Language: {language}</h4>
          <h4>Open Issues:{open_issues}</h4>
          <p>Description:{description}</p>
          <br />
        </li>
        <br />
      </div>
    );
  }

  render() {
    const { repositories } = this.props;
    console.log("repositories", repositories);

    const searchedItems = repositories.items;
    console.log("searchedItems", searchedItems);

    const mapItems = () => {
      if (searchedItems !== undefined) {
        return searchedItems.map(this.renderRepos);
      }
    };

    return (
      <div className="repositories-result">
        <h2>Repositories</h2>
        <h3>
          {repositories.total_count !== undefined &&
            `You found ${repositories.total_count} repositories`}
        </h3>
        <br />
        <div className="rendered-box">
          <ul>{mapItems()}</ul>
        </div>
        <br />
      </div>
    );
  }
}
