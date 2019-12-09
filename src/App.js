import React from "react";
import "./App.css";
import Home from './components/Home';
import RenderReposContainer from "./components/RenderReposContainer";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Home/>
        <Route path="/" exact component={RenderReposContainer} />
      </main>
    </div>
  );
}

export default App;
