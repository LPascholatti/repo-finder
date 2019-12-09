import React, { Component } from "react";
import { connect } from "react-redux";
import { loadReadme } from "../actions";
import RenderReadme from "./RenderReadme";

class RenderReadmeContainer extends Component {

  state = {
    owner: this.getOwnerLogin(),
    name: this.props.repository.name
  }

  getOwnerLogin() {
    console.log("owner in GetOwnerLogin", this.props.repository.owner);
    if (this.props.repository.owner !== undefined) {
      console.log("final owner login", this.props.repository.owner.login);
      return this.props.repository.owner.login;
    }
  }

  componentDidMount() {
    this.props.loadReadme(this.getOwnerLogin(), this.props.repository.name);
  }

  componentWillMount(){
    this.props.loadReadme(this.getOwnerLogin(), this.props.repository.name);
  }

  render() {
    console.log("owner:", this.getOwnerLogin());
    console.log("name:", this.props.repository.name);
    
    return <RenderReadme readme={this.props.readme} />;
  }
}

const mapStateToProps = state => {
  return {
    repository: state.repository,
    readme: state.readme
  };
};

export default connect(mapStateToProps, { loadReadme })(RenderReadmeContainer);
