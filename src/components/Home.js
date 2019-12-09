import React, { Component } from "react";
import RenderReposContainer from "./RenderReposContainer";
import { Route } from "react-router-dom";
import RepoDetailsContainer from "./RepoDetailsContainer";
import RenderReadmeContainer from "./RenderReadmeContainer";
import SearchBarContainer from "./SearchBarContainer";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="App-header">
          <SearchBarContainer />
          <br />
          <hr />
        </header>
        <main>
          <Route path="/home" exact component={RenderReposContainer} />
          <Route path="/repositories/:id" component={RepoDetailsContainer} />
          <Route
            path="/repositories/:id/readme"
            component={RenderReadmeContainer}
          />
        </main>
      </div>
    );
  }
}
