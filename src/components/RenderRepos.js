import React, { Component } from "react";

export default class RenderRepos extends Component {

  render() {
    const { repositories } = this.props;
    console.log("repositories", repositories)
    console.log("typeof repositories", typeof repositories)

    const searchedItems = repositories.items
    console.log("searchedItems", searchedItems)

    return (
      <div className="repositories-result">
        <h2>Repositories</h2>
        <h3>{repositories.total_count !== undefined && `You found ${repositories.total_count} repositories`}</h3>
        <br />
      </div>
    );
  }
}
