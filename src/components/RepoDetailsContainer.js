import React, { Component } from 'react';
import { loadRepository } from '../actions';
import RepoDetails from './RepoDetails';
import { connect } from 'react-redux';

class RepoDetailsContainer extends Component {

  componentDidMount(){
    console.log("running?")
    this.props.loadRepository(Number(this.props.match.params.id))
  }

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
