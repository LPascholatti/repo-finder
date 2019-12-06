import React, { Component } from "react";

export default class RenderRepos extends Component {

  renderRepos(items) {
    console.log(items);
    const { name, url, watchers, language, open_issues } = items;
    return (
      <div className="rendered-repos">
        <li key={name}>
          <h3>Name: {name}</h3>
          <h4>
            URL: <a href={url}>{url}</a>
          </h4>
          <h4>Watchers: {watchers}</h4>
          <h4>Language: {language}</h4>
          <h4>Open Issues:{open_issues}</h4>
          <br/>
        </li>
        <br/>
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
        <br/>
          <div className='rendered-box'><ul>{mapItems()}</ul></div>
        <br />
      </div>
    );
  }
}
