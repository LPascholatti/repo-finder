import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import InfiniteScroll from "react-infinite-scroll-component";
import { loadRepositories } from "../actions";

class RenderRepos extends Component {
  renderRepos(items) {
    const {
      name,
      owner,
      html_url,
      stargazers_count,
      language,
      description,
      id
    } = items;

    return (
      <div className="rendered-repos">
        <li key={id.toString()}>
          <h3 style={{ color: "blue" }}>{name}</h3>
          <div className="avatar">
            <img src={owner.avatar_url} alt={name} />
          </div>
          <h4> Owner:{owner.login}</h4>
          <h4>
            URL: <a href={html_url}>{html_url}</a>
          </h4>
          <h4>Stargazers: {stargazers_count}</h4>
          <h4>Language: {language}</h4>
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
    const { repositories, time } = this.props;
    console.log("repositories", repositories);
    console.log("time", time)

    const searchedItems = repositories.items;
    console.log("searchedItems", searchedItems);

    const mapItems = () => {
      if (searchedItems !== undefined) {
        return searchedItems.map(this.renderRepos);
      }
    };

    const reposLength = () => {
      if (repositories.items !== undefined) {
        return repositories.items.length;
      } else {
        return 0;
      }
    };

    console.log("length", reposLength());

    return (
      <div className="repositories-result">
        <main>
          <br />
          <h2>Repositories</h2>
          <br/>
          <h4>
            {repositories.total_count !== undefined &&
              `You found ${repositories.total_count} repositories`}
              <br/>
              {time !== 0 && `Request time: ${time} milliseconds`}
          </h4>
          <br />
          <div className="rendered-box">
            <ul>{mapItems()}</ul>
            {/* <InfiniteScroll
              dataLength={reposLength()}
              next={this.props.loadRepositories(this.props.name)}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            ></InfiniteScroll> */}
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

export default connect(mapStateToProps, { loadRepositories })(RenderRepos);
