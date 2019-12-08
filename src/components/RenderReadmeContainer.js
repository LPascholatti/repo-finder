import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadReadme } from '../actions';
import RenderReadme from './RenderReadme';

class RenderReadmeContainer extends Component {

   getOwnerLogin() {
    if (this.props.repository.owner !== undefined) {
      return this.props.repository.owner.login
    }
  }

  componentDidMount() {
    this.props.loadReadme(this.getOwnerLogin(), this.props.repository.name)
  }

  render() {

    console.log("owner:", this.getOwnerLogin())
    console.log("name:", this.props.repository.name)

    return (<RenderReadme
    readme={this.props.readme}
    />)
  }
}

const mapStateToProps = state => {
  return {
    repository: state.repository,
    readme: state.readme
  }
}

export default connect(mapStateToProps, {loadReadme})(RenderReadmeContainer)
