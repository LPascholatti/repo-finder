import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { loadNextRepositories } from "../actions";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

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
          <Jumbotron fluid>
          <h3>
            <Badge variant="dark">
            {name}
            </Badge>
          </h3>
          <br/>
          <div className="avatar">
            <img src={owner.avatar_url} alt={name} />
          </div>
          <br/>
          <h4> {`Owner: ${owner.login}`}</h4>
          <h4>
            URL: <a href={html_url}>{html_url}</a>
          </h4>
          <h4>Stargazers: {stargazers_count}</h4>
          <h4>Language: {language}</h4>
          <p>Description:{description}</p>
          <br />
          <Link to={`repositories/${id}`}>
            <Button variant="dark">Details</Button>
          </Link>
          </Jumbotron>
        </li>
      </div>
    );
  }

  render() {
    const { repositories, time, page } = this.props;
    console.log("repositories", repositories);
    console.log("time", time);
    console.log("page", page);

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

    const plusPage = () => {
      return this.props.page + 1;
    };

    return (
      <div className="repositories-result">
        <main>
          <Jumbotron fluid>
          <h2>
            <Badge variant="dark">
            Repositories Search:
            </Badge>
          </h2>
          <br />
          <h4>
            {repositories.total_count !== undefined &&
              `You found ${repositories.total_count} repositories`}
            <br />
            {time !== 0 && `Request time: ${time} milliseconds`}
          </h4>
          </Jumbotron>
          <div className="rendered-box">
            <ul>{mapItems()}</ul>
            <InfiniteScroll
              dataLength={reposLength()}
              next={this.props.loadNextRepositories(
                this.props.name,
                plusPage()
              )}
              hasMore={true}
              loader={reposLength() >= 90 && <h4>Loading more...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
            {mapItems()}  
            </InfiniteScroll>
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

export default connect(mapStateToProps, { loadNextRepositories })(RenderRepos);
