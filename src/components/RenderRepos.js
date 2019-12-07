import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class RenderRepos extends Component {
  renderRepos(items) {
    const {
      name,
      owner,
      html_url,
      watchers,
      language,
      open_issues,
      description,
      id
    } = items;

    return (
      <div className="rendered-repos">
        <li key={name}>
          <h3 style={{ color: "blue" }}>{name}</h3>
          <h4> Owner:{owner.login}</h4>
          <h4>
            URL: <a href={html_url}>{html_url}</a>
          </h4>
          <h4>Watchers: {watchers}</h4>
          <h4>Language: {language}</h4>
          <h4>Open Issues:{open_issues}</h4>
          <p>Description:{description}</p>
          <br />
          <Link to={`repositories/${id}`}> 
            <button>Details</button>
          </Link>
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

    const mapDetailsUrl = () => {
      if (searchedItems !== undefined) {
        return searchedItems.map(item => item.url);
      }
    };

    console.log("mapDetailsUrl", mapDetailsUrl());

    return (
      <div className="repositories-result">
        <main>
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
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  name: state.name
});

export default connect(mapStateToProps, null)(RenderRepos);
