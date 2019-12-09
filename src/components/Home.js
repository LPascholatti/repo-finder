import React, { Component } from "react";
import RenderReposContainer from "./RenderReposContainer";
import { Route } from "react-router-dom";
import RepoDetailsContainer from "./RepoDetailsContainer";
import RenderReadmeContainer from "./RenderReadmeContainer";
import SearchBarContainer from "./SearchBarContainer";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "./logo.png";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="App-header">
          <div className="github-logo">
            <img alt="logo" src={logo} />
          </div>
          <h1>Search GitHub Repositories</h1>
          <br/>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="home">Repo Finder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="https://github.com/login/oauth/authorize?client_id=fdc2a7f2b54c77163325&scope=public_repo">Login</Nav.Link>
              </Nav>
          <SearchBarContainer />
            </Navbar.Collapse>
          </Navbar>
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
