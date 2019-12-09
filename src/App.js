import React from "react";
import "./App.css";
import SearchBarContainer from "./components/SearchBarContainer";
import RenderReposContainer from "./components/RenderReposContainer";
import { Route } from "react-router-dom";
import RepoDetailsContainer from "./components/RepoDetailsContainer";
import RenderReadmeContainer from "./components/RenderReadmeContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBarContainer />
        <br />
        <hr />
      </header>
      <main>
        <Route path="/" exact component={RenderReposContainer} />
        <Route path="/repositories/:id" component={RepoDetailsContainer} />
        <Route path="/repositories/:id/readme" component={RenderReadmeContainer} />
      </main>
    </div>
  );
}

export default App;
