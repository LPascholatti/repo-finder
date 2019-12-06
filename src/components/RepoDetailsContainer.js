import React, { Component } from 'react';
import { loadRepository } from '../actions';
import RepoDetails from './RenderRepos';
import { connect } from 'react-redux'

class RepoDetailsContainer extends Component {

  // componentDidMount(){
  //   this.props.loadRepository(this.props.match.params.url)
  // }

  render() {
    return (<RepoDetails
    repository={this.props.repository}
    />)
  }
}

const mapStateToProps = state => {
  return {
    repository: state.repository
  }
}

export default connect(mapStateToProps, {loadRepository})(RepoDetailsContainer)
