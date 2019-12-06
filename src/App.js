import React from "react";
import "./App.css";
import SearchBarContainer from "./components/SearchBarContainer";
import RenderReposContainer from "./components/RenderReposContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBarContainer />
      </header>
      <body>
        <RenderReposContainer />
      </body>
    </div>
  );
}

export default App;
