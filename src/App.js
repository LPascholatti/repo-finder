import React from "react";
import "./App.css";
import SearchBarContainer from "./components/SearchBarContainer";
import RenderReposContainer from "./components/RenderReposContainer";
import { Route } from "react-router-dom";
import RepoDetailsContainer from './components/RepoDetailsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBarContainer />
      </header>
      <main>
      <RenderReposContainer />
      <Route path="/repositories/:id" component={RepoDetailsContainer}/>
      </main>
    </div>
  );
}

export default App;
