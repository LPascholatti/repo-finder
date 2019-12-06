import React, { Component } from "react";

export default class RenderRepos extends Component {

  renderRepos(items) {
    console.log(items);
    const { name, url, watchers, language, open_issues } = items;
    return (
      <div className="Rendered Repos">
        <li key={name}>
          <h3>Name: {name}</h3>
          <br />
          <h4>
            <a href={url}>URL: {url}</a>
          </h4>
          <h4>Watchers: {watchers}</h4>
          <h4>Language: {language}</h4>
          <h4>Open Issues:{open_issues}</h4>
          <br/>
          <br/>
        </li>
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

    console.log("mapItems", mapItems());

    return (
      <div className="repositories-result">
        <h2>Repositories</h2>
        <h3>
          {repositories.total_count !== undefined &&
            `You found ${repositories.total_count} repositories`}
        </h3>
        <br/>
          <ul>{mapItems()}</ul>
        <br />
      </div>
    );
  }
}
